import React, { useState } from "react";
import { useFormHook } from "./hooks/useFormHook";

export const Form = () => {
  const [openform, setOpenform] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", input);
    reset;
  };
  const { handleChange, input, reset } = useFormHook({
    titulo: "",
    descripcion: "",
    precio: 0,
  });

  return (
    <div className="">
      <button
        className="text-white"
        onClick={() => {
          setOpenform(true);
        }}
      >
        {" "}
        Add me
      </button>
      {openform ? (
        <div className="absolute backdrop-blur-xs   min-h-screen inset-0 ">
          <div className="flex justify-center items-center h-full">
            <form
              onSubmit={handleSubmit}
              className="w-[50%] bg-black/90 h-[50%] text-white flex flex-col rounded-4xl justify-around items-center"
            >
              <h2 className="font-orbitron">Agregar Promocion</h2>
              <input
                onChange={handleChange}
                name="titulo"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white "
                placeholder="Coloque el titulo"
              ></input>

              <input
                onChange={handleChange}
                name="descripcion"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white"
                placeholder="Coloque descripcion"
              ></input>
              <input
                onChange={handleChange}
                type="number"
                name="precio"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white"
                placeholder="Coloque el precio"
              ></input>
              <input
                name="validaHasta"
                type="datetime-local"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white"
                placeholder="Coloque fecha expiracion"
              ></input>
              <div className="flex justify-center items-center gap-30">
                <button
                  type="submit"
                  className="bg-green-500 font-poppins p-3  px-7 rounded-full hover:scale-110 cursor-pointer transition-all ease-in duration-[0.2s]"
                >
                  Agregar
                </button>
                <button
                  onClick={() => setOpenform(false)}
                  className="bg-red-500 p-3 font-poppins px-7 rounded-full hover:scale-110 cursor-pointer transition-all ease-in duration-[0.2s]"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
