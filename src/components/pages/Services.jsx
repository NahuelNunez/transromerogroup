import React from "react";
import { servicios } from "../../constants/services";

export const Services = () => {
  return (
    <section className="py-20 md:px-4 font-poppins " id="servicios">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="font-orbitron text-2xl font-bold text-blue-950">
          Servicios Inigualables
          <br />
          Excelencia Garantizada
        </h2>
      </div>

      <div className="gap-6 md:gap-16 grid grid-cols-1 md:flex justify-center md:flex-wrap items-center px-0 md:px-0 ">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="relative px-1 m-1 group transition-all duration-300"
          >
            <div className="absolute -top-6 left-1/4 scale-85 -translate-x-1/2 z-10 p-3 rounded-full border-2 bg-[#fdfdfd] border-gray-400 shadow-md transition-all duration-300 group-hover:border-gray-500 group-hover:scale-100">
              <div className="text-xl transition-all duration-300 group-hover:scale-100 text-blue-950">
                {servicio.icon}
              </div>
            </div>
            <div className="w-auto h-[190px] md:max-w-[350px] md:min-w-[350px] md:h-[200px] md:pt-12 px-5 pt-7 pb-2 border border-gray-300 rounded-xl text-center hover:bg-opacity-50 group-hover:border-gray-400 bg-[#fcfcfc]">
              <h3 className="text-xl text-left font-semibold mb-3">
                {servicio.title}
              </h3>
              {servicio.title === "Tour de Compras" ? (
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>
                    <strong>Buenos Aires:</strong> Salada, Once, Flores
                  </li>
                  <li>
                    <strong>Chile:</strong> Santiago, Quilicura
                  </li>
                  <li>
                    <strong>Bolivia:</strong> Aguas Blancas
                  </li>
                </ul>
              ) : servicio.title === "Línea" ? (
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>Mendoza - Aguas Blancas.</li>
                  <li>
                    <strong>Intermedias: </strong> Mendoza, San Juan, La Rioja,
                    Catamarca, Tucumán, Salta, Jujuy, Aguas Blancas.
                  </li>
                </ul>
              ) : (
                <p className="text-sm text-gray-600 text-left">
                  {servicio.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
