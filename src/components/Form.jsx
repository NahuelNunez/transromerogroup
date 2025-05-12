import React, { useEffect, useState } from "react";
import { useFormHook } from "./hooks/useFormHook";
import { useExpresoCuyano } from "./ExpresoCuyano/Store/useExpresoCuyano";
import { Logout } from "../../Auth/components/Logout";
import { useAuth } from "../../Auth/store/useAuth";
import { toast, ToastContainer } from "react-toastify";
import { useMegaPack } from "./ExpresoCuyano/Store/useMegaPack";

export const Form = () => {
  const { user } = useAuth();

  const { handleChange, input, reset, validate, error } = useFormHook({
    titulo: "",
    descripcion: "",
    precio: "",
    valida_hasta: "",
    tipo: "",
  });

  const [openform, setOpenform] = useState(false);
  const { postPromocion, getPromocion } = useExpresoCuyano();
  const {
    postPromocion: postPromocionMegaPack,
    getPromocion: getPromocionMegapack,
  } = useMegaPack();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    const fecha = "2027-12-31T00:00:00.000Z";

    const datos = {
      ...input,
      precio: parseFloat(input.precio),
      valida_hasta: fecha,
    };
    try {
      let response;
      if (input.tipo === "expresocuyano") {
        response = await postPromocion(datos, user.token);
      } else if (input.tipo === "megapack") {
        response = await postPromocionMegaPack(datos, user.token);
      } else {
        toast.error("Tipo de promoción inválido");
        return;
      }

      if (response.data) {
        toast.success("Promocion creada exitosamente");

        reset();
        setOpenform(false);
        if (input.tipo === "expresocuyano") {
          await getPromocion();
        } else if (input.tipo === "megapack") {
          await getPromocionMegapack();
        }
      }
    } catch (error) {
      console.error("No se pudo crear la promocion", error);
      toast.error("No se pudo crear la promocion");
    }
  };

  return (
    <div className="font-work-sans">
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
              <h2 className="font-work-sans">Agregar Promocion</h2>
              <select
                name="tipo"
                onChange={handleChange}
                value={input.tipo}
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white bg-black text-white"
              >
                <option value="">Selecciona un tipo</option>
                <option value="expresocuyano">Expreso Cuyano</option>
                <option value="megapack">Megapack</option>
              </select>
              {error.tipo && (
                <p className="text-sm text-red-500 font-poppins">
                  {error.tipo}
                </p>
              )}

              <input
                onChange={handleChange}
                name="titulo"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white "
                placeholder="Coloque el titulo"
              />

              {error.titulo && (
                <p className="text-sm text-red-500 font-poppins">
                  {error.titulo}
                </p>
              )}

              <input
                onChange={handleChange}
                name="descripcion"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white"
                placeholder="Coloque descripcion"
              />
              {error.descripcion && (
                <p className="text-sm text-red-500 font-poppins">
                  {error.descripcion}
                </p>
              )}
              <input
                onChange={handleChange}
                type="number"
                name="precio"
                className="w-[50%] p-2 outline-none border-b-1 border-b-gray-500 focus:border-b-white"
                placeholder="Coloque el precio sin puntos"
              />
              {error.precio && (
                <p className="text-sm text-red-500 font-poppins">
                  {error.precio}
                </p>
              )}
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
