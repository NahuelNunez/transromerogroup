import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { UseStateHook } from "../hooks/UseStateHook";
import { Form } from "../Form";
import { Login } from "../../../Auth/components/Login";
import { useAuth } from "../../../Auth/store/useAuth";
import { LogOut } from "lucide-react";
import { Logout } from "../../../Auth/components/Logout";
import principal from "../../assets/TransromeroGroup.svg";

export const Navbar = () => {
  const { user } = useAuth();
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
    <div className="bg-[#000000a8] backdrop-blur-md w-full fixed top-0  mr-auto ml-auto  z-[9999] p-7 pl-[20px] pr-[20px] ">
      <div className="flex justify-between lg:justify-around  w-full items-center text-white">
        <div className="flex items-center gap-2">
          <div className="">
            <a
              href="#inicio"
              className=" top-4 left-4  md:left-4 xl:left-40 lg:left-10"
            >
              <img
                src="/images/TRANSROMERO CUT.png"
                className="w-24 object-covers object-center object-contain "
              />
            </a>
          </div>
          <div className="">
            <a
              href="#inicio"
              className=" max-w-18 top-8 right-12  md:left-4 xl:left-70 lg:left-10"
            >
              <img
                src="/images/CUYANO SVG_Definitivo.png"
                className="w-18 bg-white/85 rounded-2xl py-2 px-3  object-covers object-center object-contain "
              />
            </a>
          </div>
          <div className="">
            <a
              href="#inicio"
              className=" top-11 right-12  md:left-4 xl:left-90 lg:left-20"
            >
              <img
                src="/images/MEGAPACK SVG_DEFINITIVO.png"
                className="w-24 object-covers object-center object-contain"
              />
            </a>
          </div>
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
            className="absolute lg:hidden bg-[#000000ce] backdrop-blur-md h-dvh w-full   -top-[94px] -right-0 rounded-lg  p-2"
          >
            <ul className="flex flex-col justify-around  items-center gap-20 my-4   md:gap-30 font-work-sans ">
              <li
                onClick={() => setIsMenuOpen(false)}
                className="text-md text-white  transition-all ease-in-out duration-100 cursor-pointer"
              >
                <a href="#inicio">Inicio</a>
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="text-md text-white  transition-all ease-in-out duration-100 cursor-pointer"
              >
                <a href="#servicios">Servicios</a>
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="text-md text-white transition-all ease-in-out duration-100 cursor-pointer"
              >
                <a href="#testimonios">Testimonios</a>
              </li>
              <li
                onClick={() => setIsMenuOpen(false)}
                className="text-md text-white  transition-all ease-in-out duration-100 cursor-pointer"
              >
                <a href="#contactanos">Contactanos</a>
              </li>
              <li
                className="text-md text-white  transition-all ease-in-out duration-100 cursor-pointer"
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
                    <ul className="py-2 flex flex-col justify-between gap-1">
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="text-md text-white transition-all ease-in-out duration-100 cursor-pointer"
                      >
                        <a href="#expresocuyano">ExpresoCuyano</a>
                      </li>
                      <li
                        onClick={() => setIsMenuOpen(false)}
                        className="text-md text-white 600 transition-all ease-in-out duration-100 cursor-pointer"
                      >
                        <a href="#megapack">MegaPack</a>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </li>
              {!user ? <Login /> : <Form />}
            </ul>
          </motion.div>
        )}

        <div className=" hidden lg:flex justify-between lg:gap-6 list-none back items-center font-work-sans text-lg">
          <a
            className="cursor-pointer hover:border-b-1 hover:tracking-wider transition-all duration-500"
            href="#inicio"
          >
            Inicio
          </a>

          <a
            className="cursor-pointer hover:border-b-1 hover:tracking-wider transition-all duration-500"
            href="#servicios"
          >
            Servicios
          </a>
          <a
            className="cursor-pointer hover:border-b-1 hover:tracking-wider transition-all duration-500"
            href="#testimonios"
          >
            Testimonios
          </a>
          <a
            className="cursor-pointer hover:border-b-1 hover:tracking-wider transition-all duration-500"
            href="#contactanos"
          >
            Contactanos
          </a>
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 hover cursor-pointer hover:border-b-1 hover:tracking-wider transition-all duration-500"
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
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute mt-[30px] w-40 bg-[#0000009f] backdrop-blur-md  pl-3 p-2 rounded-lg shadow-lg -ml-3"
              >
                <ul className="py-2 flex flex-col justify-between gap-4">
                  <li className="text-md text-white cursor-pointer hover:border-b-1 hover:tracking-wider transition-all duration-500">
                    <a href="#expresocuyano">ExpresoCuyano</a>
                  </li>
                  <li className="text-md text-white cursor-pointer hover:border-b-1 hover:tracking-wider transition-all duration-500">
                    <a href="#megapack">MegaPack</a>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
          {!user ? <Login /> : <Form />}
        </div>
      </div>
    </div>
  );
};
