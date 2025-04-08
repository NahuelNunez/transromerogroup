import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { UseStateHook } from "../hooks/UseStateHook";
import { Form } from "../Form";

export const Navbar = () => {
  const dropdownRef = useRef(null);
  const { Open, setOpen, toggleMenu, setIsMenuOpen, isMenuOpen } =
    UseStateHook();
  useEffect(() => {
    const handleClickOutside = ({ target }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="bg-[#000] w-full fixed top-0  mr-auto ml-auto  z-[9999] p-6 pl-[20px] pr-[20px]">
      <div className="flex justify-between lg:justify-around w-full items-center text-white  ">
        <div>
          <h2 className="text-2xl font-bold text-amber-400 font-Orbitron">
            <a href="#home">TransRomero Group</a>
          </h2>
        </div>
        <button
          className={`lg:hidden flex flex-col items-center gap-1.5 p-2`}
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-[0.5s] ${
              isMenuOpen
                ? "rotate-230 translate-y-2 duration-[0.5s] "
                : "bg-white"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-[0.5s] ${
              isMenuOpen
                ? "-rotate-230 translate-y-0 duration-[0.5s] "
                : "bg-white"
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-all ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
        </button>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 93 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 93 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute lg:hidden bg-[#000]/90 h-screen w-full   -top-[19px] -right-0 rounded-lg  p-2"
          >
            <ul className="flex flex-col justify-center items-center   gap-40 font-Orbitron ">
              <li
                onClick={() => setIsMenuOpen(false)}
                className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer"
              >
                <a href="#home">Inicio</a>
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer"
              >
                <a href="#servicios">Servicios</a>
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer"
              >
                <a href="#contactanos">Contactanos</a>
              </li>
              <li
                className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer"
                ref={dropdownRef}
              >
                <button
                  className="flex items-center gap-2"
                  onClick={() => setOpen(!Open)}
                >
                  Mas Opciones{" "}
                  {!Open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 15.75 7.5-7.5 7.5 7.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  )}
                </button>
                {Open && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute mt-2 w-40 bg-[#000]/90 p-2 rounded-lg shadow-lg"
                  >
                    <ul className="py-2 flex flex-col justify-between gap-4">
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer"
                      >
                        <a href="#expresocuyano">ExpresoCuyano</a>
                      </li>
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer"
                      >
                        <a href="#megapack">MegaPack</a>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </li>
            </ul>
          </motion.div>
        )}

        <div className=" hidden lg:flex justify-between gap-7 list-none items-center font-Orbitron">
          <a
            className="hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] "
            href="#home"
          >
            Inicio
          </a>

          <a className="hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] ">
            Servicios
          </a>
          <a className="hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] ">
            Contactanos
          </a>
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] "
              onClick={() => setOpen(!Open)}
            >
              Más Opciones{" "}
              {!Open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              )}
            </button>
            {Open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute mt-2 w-40 bg-[#000]/90 p-2 rounded-lg shadow-lg"
              >
                <ul className="py-2 flex flex-col justify-between gap-4">
                  <li className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer">
                    <a>ExpresoCuyano</a>
                  </li>
                  <li className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer">
                    <a>MegaPack</a>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
          <a className="hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeDasharray="28"
                strokeDashoffset="28"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="28;0"
                  />
                </path>
                <path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.4s"
                    dur="0.4s"
                    values="28;0"
                  />
                </path>
              </g>
            </svg>
          </a>
          <Form />
        </div>
      </div>
    </div>
  );
};
