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
    <div className="bg-[#000] w-full fixed top-0  mr-auto ml-auto  z-[9999] p-7 pl-[20px] pr-[20px]">
      <div className="flex justify-between lg:justify-around  w-full items-center text-white  ">
        <div className="">
          <a
            href="#inicio"
            className="absolute  top-4 left-4  md:left-4 xl:left-40 lg:left-10"
          >
            <img
              src="/images/TRANSROMERO CUT.png"
              className="w-24 object-covers object-center object-contain "
            />
          </a>
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
            <ul className="flex flex-col justify-around  items-center gap-20 my-4   md:gap-30 font-orbitron ">
              <li
                onClick={() => setIsMenuOpen(false)}
                className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer"
              >
                <a href="#inicio">Inicio</a>
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
                <a href="#testimonios">Testimonios</a>
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
                    <ul className="py-2 flex flex-col justify-between gap-1">
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
              {!user ? <Login /> : <Form />}
            </ul>
          </motion.div>
        )}

        <div className=" hidden lg:flex justify-between lg:gap-10 list-none items-center font-orbitron">
          <a
            className="hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] "
            href="#inicio"
          >
            Inicio
          </a>

          <a
            className="hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] "
            href="#servicios"
          >
            Servicios
          </a>
          <a
            className="hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] "
            href="#testimonios"
          >
            Testimonios
          </a>
          <a
            className="hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] "
            href="#contactanos"
          >
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
                    <a href="#expresocuyano">ExpresoCuyano</a>
                  </li>
                  <li className="text-md text-white hover:text-blue-600 transition-all ease-in-out duration-100 cursor-pointer">
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
