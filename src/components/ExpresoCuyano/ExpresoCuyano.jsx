import React, { useEffect, useState } from "react";

import { useExpresoCuyano } from "./Store/useExpresoCuyano";
import { useAuth } from "../../../Auth/store/useAuth";
import { UseStateHook } from "../hooks/UseStateHook";
import { toast } from "react-toastify";
import { Form } from "../Form";

export const ExpresoCuyano = () => {
  const { user } = useAuth();
  const { getPromocion, deletePromocion, promociones } = useExpresoCuyano();
  // const [data, setData] = useState([]);
  // const FetchGetPromocion = async () => {
  //   const response = await getPromocion();
  //   setData(response.data);
  // };
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
      // FetchGetPromocion();
    } catch (error) {
      console.error("Error al eliminar la promocion", error);
    }
  }

  return (
    <section id="expresocuyano" className="mb-[4rem]">
      <div className="flex flex-col gap-20 p-4">
        <div>
          <h2 className="font-orbitron text-4xl text-center font-semibold text-blue-950">
            <img
              src="../../../public/images/CUYANO SVG_Definitivo.png"
              className="mx-auto h-50 w-120 object-contain object-center"
            />
          </h2>
        </div>

        <div className="flex  justify-center gap-20 flex-wrap relative items-center">
          <div className="group transition-all duration-300">
            <div className="relative flex flex-col gap-2 justify-evenly  md:h-[250px] p-6 text-left group group-hover:border-gray-400    w-auto max-w-[400px] h-[210px] shadow-md rounded-lg  hover:cursor pointer   transition-all  border border-gray-300">
              <div className="absolute -top-5 -right-5 border-2 rounded-full border-gray-400 group-hover:border-gray-500 p-2 z-10 bg-[#fdfdfd] scale-85 group-hover:scale-110 transition-all duration-300 ">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.8em"
                  height="1.8em"
                  viewBox="0 0 472 384"
                  className="text-[#660000]"
                >
                  <path
                    fill="currentColor"
                    d="m277 64l192 256H0l128-171l96 128l34-25l-61-81z"
                  />
                </svg>
              </div>
              <h2 className="font-orbitron text-xl text-blue-950 font-semibold ">
                Conexión y confianza
              </h2>

              <p className="font-poppins text-gray-600 text-sm tracking-wide">
                Conectamos destinos y unimos historias. Viaja con comodidad y
                seguridad a Chile, Buenos Aires, Bolivia y más, con las mejores
                promociones y un servicio de calidad.
              </p>
            </div>
          </div>
          <div className="group transition-all duration-300">
            <div className=" relative flex flex-col gap-2 justify-evenly   md:h-[250px] p-6 text-left group group-hover:border-gray-400    w-auto max-w-[400px] h-[210px] shadow-md rounded-lg  hover:cursor pointer   transition-all  border border-gray-300">
              <div className="absolute -top-5 -right-5  border-2 rounded-full border-gray-400 group-hover:border-gray-500 p-2 z-10 bg-[#fdfdfd] scale-85 group-hover:scale-110 transition-all duration-300 ">
                <svg
                  className="text-[#660000]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 64 64"
                >
                  <path
                    fill="currentColor"
                    d="M62.3 43.9c0-5.5-4.3-9.8-9.8-9.8s-9.9 4.4-9.9 9.8c0 3.2 3.2 8.8 5.6 12.6H18.6c-1.4 0-2.8-.6-3.8-1.6c-1.3-1.3-1.8-3.1-1.4-5c.5-2.4 2.8-4.2 5.5-4.2h9.9c2.6 0 5.1-1 7-2.9c2.7-2.7 3.6-6.6 2.3-10.3c-1.3-3.9-5.1-6.6-9.5-6.6H15.8c2.4-3.9 5.7-9.8 5.7-13.1c0-5.5-4.3-9.8-9.8-9.8s-9.9 4.4-9.9 9.8c0 4.6 6.7 14.6 8 16.6l.3.3l.1.1c.1.1.2.1.3.2l.1.1c.1.1.2.1.3.1h.1c.2 0 .3.1.5.1h17c2.4 0 4.5 1.4 5.2 3.5s.2 4.2-1.3 5.7c-1 1-2.3 1.6-3.8 1.6h-9.9c-4.9 0-9 3.3-9.9 7.8c-.7 3.3.3 6.7 2.7 9c1.9 1.9 4.3 2.9 7 2.9h33.8c.2 0 .3 0 .5-.1h.1c.1 0 .2-.1.3-.1s.1-.1.2-.1c.1-.1.2-.1.3-.2l.1-.1c.1-.1.2-.2.2-.3c0 0 .1 0 .1-.1c1.5-1.6 8.2-11.2 8.2-15.9M11.7 7.5c3 0 5.3 2.3 5.3 5.3c0 1.9-2.7 7-5.3 11.2c-2.7-4.2-5.4-9.2-5.4-11.2c0-2.9 2.4-5.3 5.4-5.3m40.7 31.1c3 0 5.3 2.3 5.3 5.3c0 1.9-2.7 6.8-5.4 10.8c-2.6-4-5.4-8.9-5.4-10.8c.1-2.9 2.5-5.3 5.5-5.3"
                  />
                  <path
                    fill="currentColor"
                    d="M13.9 12.7c0-.6-.2-1.2-.6-1.6c-.8-.8-2.4-.8-3.2 0l-.3.3c-.1.1-.1.3-.2.4s-.1.3-.1.4v.8c0 .1.1.3.1.4s.1.3.2.4l.3.3c.4.4 1 .7 1.6.7s1.2-.2 1.6-.7c.3-.2.6-.8.6-1.4M54 45.9c.4-.4.7-1 .7-1.6s-.2-1.2-.7-1.6l-.3-.3c-.1-.1-.3-.1-.4-.2c-.1 0-.3-.1-.4-.1H52c-.1 0-.3.1-.4.1c-.1.1-.3.1-.4.2l-.3.3c-.4.4-.7 1-.7 1.6s.2 1.2.7 1.6l.3.3c.1.1.3.1.4.2c.1 0 .3.1.4.1h.4c.6 0 1.2-.2 1.6-.6"
                  />
                </svg>
              </div>
              <h2 className="font-orbitron text-xl font-semibold text-blue-950">
                Compromiso con la excelencia
              </h2>

              <p className=" font-poppins text-sm text-gray-600 tracking-wide ">
                Ofrecemos viajes confiables con vehículos modernos, atención
                personalizada y total compromiso con la puntualidad y el
                confort.
              </p>
            </div>
          </div>
          <div className="group transition-all duration-300">
            <div className=" relative flex flex-col gap-2 justify-evenly   md:h-[250px] p-6 text-left group group-hover:border-gray-400    w-auto max-w-[400px] h-[210px] shadow-md rounded-lg  hover:cursor pointer   transition-all  border border-gray-300">
              <div className="absolute -top-5 -right-5 border-2 rounded-full border-gray-400 group-hover:border-gray-500 p-2 z-10 bg-[#fdfdfd] scale-85 group-hover:scale-110 transition-all duration-300 ">
                <svg
                  className="text-[#660000]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 2h1.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5v-10A1.5 1.5 0 0 1 1.5 2H3V0h1v2h7V0h1zM6 8H3V7h3zm6-1H9v1h3zm-6 4H3v-1h3zm3 0h3v-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="font-orbitron text-xl font-semibold text-blue-950">
                Llamado a la acción
              </h2>

              <p className=" font-poppins text-sm text-gray-600 tracking-wide">
                Ya sea por trabajo, aventura o placer, te llevamos a donde
                necesites. Reserva tu asiento hoy y descubre una nueva forma de
                viajar.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          <h2 className="font-orbitron text-2xl text-center font-semibold text-blue-950 ">
            Promociones de viajes
            {/* <hr className="w-64 mx-auto mt-2 text-[#660000]" /> */}
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
      </div>
    </section>
  );
};
