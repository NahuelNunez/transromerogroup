import React from "react";
import { testimonials } from "../../constants/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/pagination";

export const Testimonials = () => {
  // Función para calcular el tamaño del texto según la longitud de la cita

  return (
    <section
      id="testimonios"
      className="relative py-24 px-4 bg-amber-50 overflow-hidden"
    >
      {/* Fondo visual elegante */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/testimonios.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/10 to-amber-200/20 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-amber-800 mb-12 font-work-sans"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Lo que dicen{" "}
          <span className="text-amber-600">nuestros pasajeros</span>
        </motion.h2>

        <motion.div
          className="bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-6 max-w-5xl mx-auto border border-amber-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Mousewheel]}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className} w-3 h-3 rounded-full mx-1 bg-amber-300 transition-all duration-300"></span>`,
            }}
            mousewheel
            loop
            slidesPerView={1}
            className="py-6 h-auto"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="px-4">
                <motion.div
                  className="flex flex-col items-center text-center perspective-1000"
                  initial={{ rotateY: 90, opacity: 0 }}
                  whileInView={{ rotateY: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <svg
                    className="w-10 h-10 text-amber-500 mb-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Texto tipo máquina de escribir con tamaño dinámico */}
                  <blockquote
                    className={`italic text-gray-700 mb-8 max-w-2xl min-h-[150px] transition-all duration-300 
                     
                    `}
                  >
                    {testimonial.quote}
                  </blockquote>

                  <div className="flex flex-col items-center">
                    <p className="text-amber-800 font-semibold mb-15">
                      {testimonial.author}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};
