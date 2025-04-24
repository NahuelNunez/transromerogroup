import React, { useEffect, useState } from "react";
import { useMegaPack } from "./Store/useMegaPack";
import { useAuth } from "../../../Auth/store/useAuth";
import { toast } from "react-toastify";

export const Megapack = () => {
  const { user } = useAuth();
  const { getPromocion, deletePromocion, promociones } = useMegaPack();
  useEffect(() => {
    getPromocion();
  }, [user]);

  const HandleWspClick = (datos) => {
    const message = `Hola,necesito más información acerca de esta promoción de viaje:
  *Titulo:* ${datos.titulo}
  *Descripcion:* ${datos.descripcion}
  *Precio:* $ ARS ${datos.precio}
  
  `;
    const phoneNumber = `5492645252157`;
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(waLink, "_blank");
  };

  async function DeletePromoById(promoID) {
    try {
      await toast.promise(deletePromocion(promoID, user.token), {
        pending: "Eliminando...",
        success: "Promocion eliminada exitosamente",
        error: "Error al eliminar la promocion",
      });

      getPromocion();
    } catch (error) {
      console.error("Error al eliminar la promocion", error);
    }
  }

  return (
    <section id="megapack">
      <div className="mx-auto">
        <hr className="max-w-[90rem]  min-w-[15rem] mx-auto mt-0.5 text-[#0024663b]" />
        <h2 className="font-orbitron text-2xl text-center font-semibold text-blue-950 mt-10 mb-[5rem]">
          <img
            src="../../../public/images/MEGAPACK SVG_DEFINITIVO.png"
            className="mx-auto w-100 h-50 object-contain object-center"
          />
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {promociones.length === 0 ? (
          <p className="text-center text-gray-600 font-poppins">
            No hay promociones disponibles.
          </p>
        ) : (
          promociones.map((promos) => (
            <div
              className="flex flex-col items-center justify-center min-w-[350px] h-[350px] md:w-[750px] md:h-[200px] p-4 border border-gray-400 rounded-2xl transition-all duration-300 hover:border-gray-600 md:flex-row md:items-center md:justify-between"
              key={promos.id}
            >
              <img
                src="/images/cardexpress.png"
                width={250}
                height={50}
                className="rounded-lg bg-cover bg-center w-[200px]"
              />
              <div className="flex flex-col justify-around gap-3 mt-1 md:w-[400px]">
                <h2 className="text-blue-700 font-bold font-poppins">
                  {promos.titulo}
                </h2>
                <p className="text-gray-600 font-poppins">
                  {promos.descripcion}
                </p>
                <h3 className="text-green-500 font-semibold">
                  $ ARS {promos.precio}
                </h3>
                <div className="mx-auto bg-[#2A4865] p-3 rounded-full scale-90 transition-all hover:scale-100 cursor-pointer duration-300">
                  <a
                    onClick={() => HandleWspClick(promos)}
                    className="text-white font-semibold"
                  >
                    Reservar Ahora
                  </a>
                </div>
              </div>

              {!user ? (
                ""
              ) : (
                <div className="flex w-full justify-between md:flex md:flex-col md:justify-around md:gap-10 md:w-10">
                  <button
                    onClick={() => DeletePromoById(promos.id)}
                    className="text-blue-600 hover:text-red-500 transition-all duration-300 cursor-pointer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.5em"
                      height="1.5em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  );
};
