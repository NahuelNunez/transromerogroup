import React, { useEffect, useState } from "react";
import { useFormHook } from "./hooks/useFormHook";
import { useExpresoCuyano } from "./ExpresoCuyano/Store/useExpresoCuyano";
import { Logout } from "../../Auth/components/Logout";
import { useAuth } from "../../Auth/store/useAuth";
import { toast, ToastContainer } from "react-toastify";

export const Form = () => {
  const { user } = useAuth();

  const { handleChange, input, reset } = useFormHook({
    titulo: "",
    descripcion: "",
    precio: 0,
    valida_hasta: "",
  });

  const [openform, setOpenform] = useState(false);
  const { postPromocion } = useExpresoCuyano();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fechaISO = new Date(input.valida_hasta + "T18:00:00Z").toISOString();

    const datos = {
      ...input,
      precio: parseFloat(input.precio),
      valida_hasta: fechaISO,
    };
    try {
      const response = await postPromocion(datos, user.token);

      if (response.data) {
        toast.success("Promocion creada exitosamente");

        reset();
        setOpenform(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      console.error("No se pudo crear la promocion", error);
      toast.error("No se pudo crear la promocion");
    }
  };

  return (
    <div className="font-orbitron">
      <ToastContainer />
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
              className="h-[70%] w-full p-4 md:p-0 md:w-[50%] bg-black/90 md:h-[50%] text-white flex flex-col rounded-4xl justify-around items-center"
            >
              <h2 className="font-orbitron">Agregar Promocion</h2>
              <input
                onChange={handleChange}
                name="titulo"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white "
                placeholder="Coloque el titulo"
              />

              <input
                onChange={handleChange}
                name="descripcion"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white"
                placeholder="Coloque descripcion"
              />
              <input
                onChange={handleChange}
                type="number"
                name="precio"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white"
                placeholder="Coloque el precio"
              ></input>
              <input
                name="valida_hasta"
                type="date"
                onChange={handleChange}
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white"
                placeholder="Coloque fecha expiracion"
              ></input>
              <div className="flex justify-center items-center md:gap-30 gap-10">
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
