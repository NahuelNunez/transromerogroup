import { useState } from "react";

export const MenuHamburger = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex justify-between gap-5 list-none items-center">
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
    </div>
  );
};
