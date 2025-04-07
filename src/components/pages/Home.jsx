import React from "react";

export const Home = () => {
  return (
    <section
      className="relative   w-full  bg-cover bg-center  bg-[url('images/home1.jpeg')]"
      id="home"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="flex  flex-col gap-30 w-full lg:mt-20  ">
        <div className="relative flex flex-col  gap-6 text-white  items-center ">
          <h2 className="text-4xl font-orbitron">QUIENES SOMOS</h2>
          <p className="text-balance font-poppins leading-7 max-w-[450px] ">
            Somos un grupo economico en crecimiento dedicada al transporte de
            pasajeros y cargas generales en el ambito nacional e internacional,
            como así tambien estamos dedicados al turismo en todo sus aspectos.
          </p>
        </div>{" "}
        <div className="text-white  p-8 relative  flex flex-col gap-2 lg:grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] ">
          <div className=" border-b lg:border-r-1 lg:border-b-0 ">
            <h2 className="text-4xl font-orbitron ">VISIÓN</h2>
            <p className="text-balance mb-3 font-poppins">
              Ser lideres en el transporte de pasajeros y cargas generales
              interprovinciales, internacionales y sector minero. en estamos
              convencidos que las practicas sostenibles son el unico camino.
            </p>
          </div>
          <div className="border-b lg:border-r lg:border-b-0 ">
            <h2 className="font-orbitron text-4xl">MISIÓN</h2>
            <p className="font-poppins mb-3  tracking-wide text-balance">
              Para transromero group la principal mision es crear servicios de
              valor para satisfacer las espectativas de nuestros clientes.
              formamos el mejor equipo humano de trabajo y lo cuidamos.
              propiciamos alianzas estrategicas, capacitación continua,
              adptación a los cambios usando tecnologías avanzadas. hacer esta
              empresa economica y socialmente redituable.
            </p>
          </div>

          <div className="">
            <h2 className="font-orbitron text-4xl">VALORES</h2>
            <ul className="ml-6 list-disc text-balance font-poppins leading-7">
              <li>Sustentabilidad</li>
              <li>Adaptabilidad</li>
              <li>Credibilidad</li>
              <li>Fe en dios</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
