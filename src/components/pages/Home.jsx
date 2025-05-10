import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const slides = [
  {
    title: "Visión",
    content:
      "Ser líderes en el transporte de pasajeros y cargas generales interprovinciales, internacionales y sector minero. Estamos convencidos de que las prácticas sostenibles son el único camino.",
  },
  {
    title: "Misión",
    content:
      "Para Transromero Group la principal misión es crear servicios de valor para satisfacer las expectativas de nuestros clientes. Formamos el mejor equipo humano de trabajo y lo cuidamos. Propiciamos alianzas estratégicas, capacitación continua, adaptación a los cambios usando tecnologías avanzadas. Hacer esta empresa económica y socialmente redituable.",
  },
];

export const Home = () => {
  return (
    <section
      className="relative w-full h-full bg-no-repeat bg-cover bg-center bg-[url('/images/home1.jpg')] scale-x-[-1] "
      id="inicio"
    >
      <div className="absolute inset-0  bg-gradient-to-r from-amber-100/20 to-amber-200/20 "></div>
      <div className="relative z-10 scale-x-[-1] px-1 md:px-3 py-20 flex flex-col gap-8 md:gap-12 max-w-[76rem]  mx-auto text-justify">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:max-w-1/2 text-black  p-6 rounded-xl shadow-black/30 mt-10"
        >
          <h2 className="text-2xl font-work-sans font-bold tracking-wide mb-2 py-1 rounded w-fit">
            Trans Romero Group
          </h2>
          <p className="font-poppins tracking-wide leading-7 text-sm">
            Somos un grupo económico en crecimiento dedicado al transporte de
            pasajeros y cargas generales en el ámbito nacional e internacional,
            como así también estamos dedicados al turismo en todos sus aspectos.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col md:flex-row gap-6 text-white text-justify"
        >
          <div className="flex-1 md:max-w-1/2 p-6 rounded-xl bg-gray-900/25 backdrop-blur-[3px] shadow-md shadow-black/30">
            <h2 className="text-2xl font-work-sans tracking-wide mb-2 rounded w-fit">
              Visión
            </h2>
            <p className="font-poppins leading-7 text-sm">
              Ser líderes en el transporte de pasajeros y cargas generales
              interprovinciales, internacionales y sector minero. Estamos
              convencidos de que las prácticas sostenibles son el único camino.
            </p>
          </div>
          <div className="flex-1 p-6 rounded-2xl bg-gray-900/20 backdrop-blur-[3px] shadow-xl shadow-black/30 text-justify">
            <h2 className="text-2xl font-work-sans tracking-wide mb-2 rounded w-fit">
              Misión
            </h2>
            <p className="font-poppins leading-7 text-sm">
              Para Transromero Group la principal misión es crear servicios de
              valor para satisfacer las expectativas de nuestros clientes.
              Formamos el mejor equipo humano de trabajo y lo cuidamos.
              Propiciamos alianzas estratégicas, capacitación continua,
              adaptación a los cambios usando tecnologías avanzadas. Hacer esta
              empresa económica y socialmente redituable.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-white font-lora tracking-wide"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-30">
            {[
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5em"
                    height="2.5em"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M21.57 27.75A12.9 12.9 0 0 1 16 29C8.832 29 3 23.168 3 16c0-3.075 1.057-5.979 3-8.308V10h2V4H2v2h2.842A14.86 14.86 0 0 0 1 16c0 8.271 6.729 15 15 15a14.9 14.9 0 0 0 6.43-1.444z" />
                    <path d="M21 9c-3.16 0-5.751 2.457-5.978 5.56A5.97 5.97 0 0 0 11 13H7v4c0 3.309 2.692 6 6 6h2v4h2v-8h2c3.308 0 6-2.691 6-6V9zm-8 12c-2.206 0-4-1.794-4-4v-2h2c2.206 0 4 1.794 4 4v.586l-2.293-2.293l-1.414 1.414L13.586 21zm10-8c0 2.206-1.794 4-4 4h-.586l2.293-2.293l-1.414-1.414L17 15.586V15c0-2.206 1.794-4 4-4h2z" />
                    <path d="M31 16c0-8.271-6.729-15-15-15a14.9 14.9 0 0 0-6.43 1.444l.86 1.806A12.9 12.9 0 0 1 16 3c7.168 0 13 5.832 13 13c0 3.075-1.057 5.979-3 8.308V22h-2v6h6v-2h-2.842A14.86 14.86 0 0 0 31 16" />
                  </svg>
                ),
                title: "Sustentabilidad",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="2.5em"
                    height="2.5em"
                    fill="currentColor"
                  >
                    <path d="M32 2C15.4 2 2 15.4 2 32h6c0-13.3 10.7-24 24-24s24 10.7 24 24c0 9.3-5.3 17.4-13 21.4V48l-8 8 8 8v-6.6C51.7 53 60 43.4 60 32 60 15.4 46.6 2 32 2z" />
                    <path d="M20 58v-6.6C12.3 53 6 43.4 6 32H0c0 16.6 13.4 30 30 30v-6l8 8-8 8v-6c-13.3 0-24-10.7-24-24h6c0 9.3 5.3 17.4 13 21.4z" />
                    <path d="M30 18h4v28h-4z" />
                  </svg>
                ),
                title: "Adaptabilidad",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width="2.5em"
                    height="2.5em"
                    fill="currentColor"
                  >
                    <path d="M32 2l26 10v18c0 15.6-11.3 29.2-26 32-14.7-2.8-26-16.4-26-32V12L32 2z" />
                    <path
                      fill="#fff"
                      d="M28 42l-10-10 3-3 7 7 14-14 3 3-17 17z"
                    />
                  </svg>
                ),
                title: "Credibilidad",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2.5em"
                    height="2.5em"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M14 2h-4v6H4v4h6v10h4V12h6V8h-6z" />
                  </svg>
                ),
                title: "Fe en Dios",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl py-6 px-4 flex flex-col items-center text-center hover:bg-white/20 transition-all duration-300 shadow-lg hover:scale-105"
              >
                <div className="mb-4 text-white">{item.icon}</div>
                <span className="text-sm font-semibold">{item.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center mt-6"
        >
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 border-2 border-blue-500 text-white hover:text-blue-500 hover:bg-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            Ver servicios
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2em"
              height="1.2em"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
