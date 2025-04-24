import React from "react";

export const Home = () => {
  return (
    <section
      className="relative   w-full   bg-cover bg-center bg-[url('/images/home1.jpeg')] "
      id="inicio"
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="md:flex  md:flex-col gap-5 md:gap-30 w-full lg:mt-20  ">
        <div className="relative flex flex-col p-4 gap-6 text-white mt-22 px-8 md:mt-25  md:ml-[100px] lg:ml-[175px] xl:ml-[300px] ">
          <h2 className="text-2xl font-orbitron">QUIENES SOMOS</h2>
          <p className="text-balance font-poppins tracking-wide leading-7 max-w-[450px] ">
            Somos un grupo economico en crecimiento dedicada al transporte de
            pasajeros y cargas generales en el ambito nacional e internacional,
            como así tambien estamos dedicados al turismo en todo sus aspectos.
          </p>
        </div>{" "}
        <div className="text-white   pb-4 w-[90%] md:w-[65%] mx-auto  relative  flex flex-col gap-2  ">
          <div className="flex flex-col md:flex-row  w-full px-2 ">
            <div className=" border-b lg:border-r-1 w-full lg:border-b-0 md:w-[45%]">
              <h2 className="text-2xl font-orbitron ">VISIÓN</h2>
              <p className="text-balance mb-3 font-poppins px-1 w-[320px] md:w-full">
                Ser lideres en el transporte de pasajeros y cargas generales
                interprovinciales, internacionales y sector minero. en estamos
                convencidos que las practicas sostenibles son el unico camino.
              </p>
            </div>
            <div className="border-b lg:border-none w-full  md:w-[55%] md:px-5 text-left ">
              <h2 className="font-orbitron text-2xl">MISIÓN</h2>
              <p className="font-poppins mb-3  tracking-wide text-balance w-[320px] md:w-full">
                Para transromero group la principal mision es crear servicios de
                valor para satisfacer las espectativas de nuestros clientes.
                formamos el mejor equipo humano de trabajo y lo cuidamos.
                propiciamos alianzas estrategicas, capacitación continua,
                adptación a los cambios usando tecnologías avanzadas. hacer esta
                empresa economica y socialmente redituable.
              </p>
            </div>
          </div>
          <div className="pb-6 py-10">
            <ul className="flex flex-col gap-9 md:flex-row justify-between items-center font-poppins  ">
              <li className="flex flex-col gap-2 items-center md:items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="1.5em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M21.57 27.75A12.9 12.9 0 0 1 16 29C8.832 29 3 23.168 3 16c0-3.075 1.057-5.979 3-8.308V10h2V4H2v2h2.842A14.86 14.86 0 0 0 1 16c0 8.271 6.729 15 15 15a14.9 14.9 0 0 0 6.43-1.444z"
                  />
                  <path
                    fill="currentColor"
                    d="M21 9c-3.16 0-5.751 2.457-5.978 5.56A5.97 5.97 0 0 0 11 13H7v4c0 3.309 2.692 6 6 6h2v4h2v-8h2c3.308 0 6-2.691 6-6V9zm-8 12c-2.206 0-4-1.794-4-4v-2h2c2.206 0 4 1.794 4 4v.586l-2.293-2.293l-1.414 1.414L13.586 21zm10-8c0 2.206-1.794 4-4 4h-.586l2.293-2.293l-1.414-1.414L17 15.586V15c0-2.206 1.794-4 4-4h2z"
                  />
                  <path
                    fill="currentColor"
                    d="M31 16c0-8.271-6.729-15-15-15a14.9 14.9 0 0 0-6.43 1.444l.86 1.806A12.9 12.9 0 0 1 16 3c7.168 0 13 5.832 13 13c0 3.075-1.057 5.979-3 8.308V22h-2v6h6v-2h-2.842A14.86 14.86 0 0 0 31 16"
                  />
                </svg>
                Sustentabilidad
              </li>
              <li className="flex flex-col items-center md:items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="2em"
                  height="1.5em"
                  fill="currentColor"
                >
                  <path d="M32 2C15.4 2 2 15.4 2 32h6c0-13.3 10.7-24 24-24s24 10.7 24 24c0 9.3-5.3 17.4-13 21.4V48l-8 8 8 8v-6.6C51.7 53 60 43.4 60 32 60 15.4 46.6 2 32 2z" />
                  <path d="M20 58v-6.6C12.3 53 6 43.4 6 32H0c0 16.6 13.4 30 30 30v-6l8 8-8 8v-6c-13.3 0-24-10.7-24-24h6c0 9.3 5.3 17.4 13 21.4z" />
                  <path d="M30 18h4v28h-4z" />
                </svg>
                Adaptabilidad
              </li>
              <li className="flex flex-col items-center md:items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  width="2em"
                  height="1.5em"
                  fill="currentColor"
                >
                  <path d="M32 2l26 10v18c0 15.6-11.3 29.2-26 32-14.7-2.8-26-16.4-26-32V12L32 2z" />
                  <path
                    fill="#fff"
                    d="M28 42l-10-10 3-3 7 7 14-14 3 3-17 17z"
                  />
                </svg>
                Credibilidad
              </li>
              <li className="flex flex-col items-center gap-2 md:items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6z"
                  />
                </svg>
                Fe en Dios
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
