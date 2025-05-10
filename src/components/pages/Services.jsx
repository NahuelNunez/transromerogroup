import React from "react";
import { motion } from "framer-motion";
import { servicios } from "../../constants/services";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

export const Services = () => {
  return (
    <section
      id="servicios"
      className="py-20 md:px-4 font-poppins scroll-mt-28 bg-amber-50"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-work-sans text-2xl font-bold text-amber-800">
          Servicios Inigualables
          <br />
          <span className="mt-2 text-amber-700 block">
            Excelencia Garantizada
          </span>
        </h2>
      </motion.div>

      <motion.div
        className="gap-6 md:gap-16 grid grid-cols-1 md:flex justify-center md:flex-wrap items-center px-0 md:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="relative px-1 m-1 group"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 p-3 rounded-full border-2 bg-white border-amber-400 shadow-lg transition-all duration-300 group-hover:border-amber-500"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl text-amber-600">{servicio.icon}</div>
            </motion.div>

            <div className="w-auto h-[190px] md:max-w-[350px] md:min-w-[350px] md:h-[200px] md:pt-12 px-5 pt-7 pb-2 border border-amber-200 rounded-xl text-center bg-white hover:bg-amber-100 hover:shadow-xl transition-all duration-300 ease-in-out">
              <h3 className="text-xl text-left font-semibold mb-3 text-gray-800">
                {servicio.title}
              </h3>

              {servicio.title === "Tour de Compras" ? (
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>
                    <strong className="text-amber-700">Buenos Aires:</strong>{" "}
                    Salada, Once, Flores
                  </li>
                  <li>
                    <strong className="text-amber-700">Chile:</strong> Santiago,
                    Quilicura
                  </li>
                  <li>
                    <strong className="text-amber-700">Bolivia:</strong> Aguas
                    Blancas
                  </li>
                </ul>
              ) : servicio.title === "Línea" ? (
                <ul className="text-sm text-gray-600 space-y-1 text-left">
                  <li>Mendoza - Aguas Blancas.</li>
                  <li>
                    <strong className="text-amber-700">Intermedias: </strong>{" "}
                    Mendoza, San Juan, La Rioja, Catamarca, Tucumán, Salta,
                    Jujuy, Aguas Blancas.
                  </li>
                </ul>
              ) : (
                <p className="text-sm text-gray-600 text-left">
                  {servicio.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
