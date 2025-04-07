import React, { useEffect, useState } from "react";
import { FetchApi } from "../hooks/FetchApi";

export const ExpresoCuyano = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await FetchApi();

      setData(response);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <section id="#expresocuyano" className="   ">
      <div className="flex flex-col gap-20 p-4">
        <div>
          <h2 className="font-orbitron text-4xl text-center">
            Expreso Cuyano - Tu viaje, nuestra pasión.
          </h2>
        </div>

        <div className="flex  justify-center gap-49 flex-wrap relative items-center">
          <div className=" flex flex-col justify-around items-center text-center max-w-[300px]  w-[300px] h-[350px] shadow-2xl rounded-lg  hover:cursor pointer hover:translate-3d hover:-translate-y-6 transition-all  border border-gray-400">
            <h2 className="font-orbitron text-xl ">Conexión y confianza</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
              viewBox="0 0 472 384"
              className="text-[#660000]"
            >
              <path
                fill="currentColor"
                d="m277 64l192 256H0l128-171l96 128l34-25l-61-81z"
              />
            </svg>
            <p className="max-w-[300px] font-poppins">
              Conectamos destinos y unimos historias. Viaja con comodidad y
              seguridad a Chile, Buenos Aires, Bolivia y más, con las mejores
              promociones y un servicio de calidad.
            </p>
          </div>
          <div className=" flex flex-col justify-around items-center text-center max-w-[300px] border border-gray-400   w-[300px] h-[350px] shadow-2xl rounded-lg  hover:cursor pointer hover:translate-3d hover:-translate-y-6 transition-all ">
            <h2 className="font-orbitron text-xl">
              Compromiso con la excelencia
            </h2>
            <svg
              className="text-[#660000]"
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
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

            <p className="max-w-[300px] font-poppins text-md">
              Nos especializamos en ofrecer una experiencia de viaje confiable,
              con vehículos modernos, atención personalizada y un compromiso
              absoluto con la puntualidad y el confort de nuestros pasajeros.
            </p>
          </div>
          <div className=" flex flex-col justify-around items-center text-center max-w-[300px] w-[300px] h-[350px] shadow-2xl rounded-lg border border-gray-400 hover:cursor pointer hover:translate-3d hover:-translate-y-6 transition-all ">
            <h2 className="font-orbitron text-xl">Llamado a la acción</h2>
            <svg
              className="text-[#660000]"
              xmlns="http://www.w3.org/2000/svg"
              width="4em"
              height="4em"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 2h1.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-12A1.5 1.5 0 0 1 0 13.5v-10A1.5 1.5 0 0 1 1.5 2H3V0h1v2h7V0h1zM6 8H3V7h3zm6-1H9v1h3zm-6 4H3v-1h3zm3 0h3v-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <p className="max-w-[300px] font-poppins p-2">
              Ya sea por trabajo, aventura o placer, te llevamos a donde
              necesites. Reserva tu asiento hoy y descubre una nueva forma de
              viajar.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-orbitron text-2xl text-center ">
            Promociones de viajes
            <hr className="w-64 mx-auto mt-2 text-[#660000]" />
          </h2>
        </div>

        <div className="container">
          {data.map((promo, index) => (
            <div key={index} className="">
              <img src="" alt="" />
              <h3>{promo.titulo}</h3>
              <h4>{promo.descripcion}</h4>
              <h4>{promo.precio}</h4>
              <button>Reservar ahora</button>
            </div>
          ))}
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
};
