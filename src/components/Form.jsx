import React, { useEffect, useState } from "react";
import { useFormHook } from "./hooks/useFormHook";
import { useExpresoCuyano } from "./ExpresoCuyano/Store/useExpresoCuyano";
import { Logout } from "../../Auth/components/Logout";

export const Form = () => {
  const [openform, setOpenform] = useState(false);
  const { handleChange, input, reset, setInput } = useFormHook({
    titulo: "",
    descripcion: "",
    precio: 0,
    validaHasta: "",
  });
  const { postPromocion, getPromocion } = useExpresoCuyano();

  const handleSubmit = async () => {
    const isoDate = new Date(input.validaHasta).toISOString();

    const datos = {
      ...input,
      validaHasta: isoDate,
    };

    try {
      const response = await postPromocion(datos);
    } catch (error) {
      console.error("Error al crear promocion", error);
    }
    reset();
  };

  return (
    <div className="font-orbitron">
      <div className="flex justify-center items-center gap-20">
        <button
          className="text-white cursor-pointer hover:text-red-500 transition-all duration-[0.2s]"
          onClick={() => {
            setOpenform(true);
          }}
        >
          {" "}
          Agregar viajes
        </button>
        <Logout />
      </div>
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
                onChange={handleChange}
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
