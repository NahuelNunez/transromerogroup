import React, { useEffect, useState } from "react";
import { useMegaPack } from "./Store/useMegaPack";
import { useAuth } from "../../../Auth/store/useAuth";
import { toast } from "react-toastify";

export const Megapack = () => {
  const { user } = useAuth();
  const { getPromocion, deletePromocion, promociones } = useMegaPack();
  const handleScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add("scroll-animate");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
    <section id="megapack" className="">
      <div className="mx-auto">
        <hr className="max-w-[90rem]  min-w-[15rem] mx-auto mt-1.5 text-gray-400 " />
        <h2 className="font-orbitron text-2xl text-center font-semibold text-blue-950 mt-10 mb-[5rem]">
          <img
            src="/images/MEGAPACK SVG_DEFINITIVO.png"
            className="mx-auto w-100 h-50 object-contain object-center animate-on-scroll"
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
              className="bg-white/80 backdrop-blur-md mb-5 box-shadow  hover:scale-110  flex flex-col items-center justify-center  h-auto min-w-[350px] h-[400px] md:w-[800px] lg:w-[840px] sm:h-auto md:h-[310px] lg:h-[310px] p-4 border border-gray-600 rounded-2xl transition-all duration-300 hover:border-gray-600 md:flex-row md:items-center md:justify-between"
              key={promos.id}
            >
              <img
                src="/images/cardexpress.png"
                className="rounded-lg h-25 w-[150px] md:h-35  object-center md:w-[200px]"
              />
              <div className="flex flex-col justify-around gap-3 mt-1 md:w-full ml-3">
                <h2 className="text-blue-700 font-bold font-poppins text-md md:text-lg">
                  {promos.titulo}
                </h2>
                <p className="text-gray-600 font-poppins text-sm md:text-md">
                  {promos.descripcion}
                </p>
                <h3 className="text-green-500 font-semibold">
                  $ ARS {promos.precio}
                </h3>
                <div className="mx-auto bg-[#2A4865] p-3   hover:bg-[#046cdc] rounded-full  transition-all  cursor-pointer duration-300">
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
