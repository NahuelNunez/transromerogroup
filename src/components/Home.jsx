import React from "react";

export const Home = () => {
  return (
    <section
      className="flex justify-center items-center w-full bg-cover bg-center  h-screen bg-[url('images/home1.jpeg')]"
      id="home"
    >
      <div className="absolute inset-0 bg-black opacity-70 "></div>
      <div className=" relative  ">
        <div className="flex flex-col items-center gap-15 text-start p-6 md:flex md:flex-row md:flex-wrap md:gap-20 md:text-start  md:justify-evenly md:items-center">
          <h2 className="text-5xl font-bold text-white">
            Transporte Sostenible
          </h2>
          <p className="max-w-[450px] leading-6 tracking-wide text-md text-white text-lg font-semibold ">
            “SER LIDERES EN EL TRANSPORTE DE PASAJEROS Y CARGAS GENERALES
            INTERPROVINCIALES, INTERNACIONALES Y SECTOR MINERO. EN{" "}
            <span className="font-bold text-blue-600">TRANSROMERO GROUP</span>{" "}
            ESTAMOS CONVENCIDOS QUE LAS PRACTICAS SOSTENIBLES SON EL UNICO
            CAMINO.”
          </p>
        </div>
      </div>
    </section>
  );
};
