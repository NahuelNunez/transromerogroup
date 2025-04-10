import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import useAuth, { useInitializeAuth } from "../hooks/useInitializeAuth";
export const Login = () => {
  const { login, user } = useAuth();
  useInitializeAuth();
  const [loginmenu, setLoginmenu] = useState(false);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const openMenu = () => {
    setLoginmenu(!loginmenu);
  };

  const OnSubmit = async (data) => {
    const { data: userData, error } = await login(data);
    if (userData) {
      setLoginmenu(false);
    } else {
      setError("Error en email o contraseña");
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };
  return (
    <div className="">
      <button
        onClick={openMenu}
        className="hover hover:text-blue-600  cursor-pointer hover:transition-all hover:ease-in-out hover:duration-[0.2s] "
      >
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
      </button>
      {loginmenu ? (
        <div className="absolute backdrop-blur-lg inset-0 min-h-screen h-full ">
          <div className="relative w-[50%] h-[50%] bg-black/70 rounded-4xl  mx-auto top-40 bottom-0 p-10">
            <button
              onClick={() => {
                setLoginmenu(false);
              }}
              className="absolute right-20 cursor-pointer hover:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                />
              </svg>
            </button>
            <h2 className="font-orbitron text-center text-2xl">
              Iniciar Sesión
            </h2>
            <form
              onSubmit={handleSubmit(OnSubmit)}
              className=" flex flex-col justify-evenly w-full h-full items-center gap-5 p-6"
            >
              <input
                className="outline-none p-2 border-b-1 font-poppins border-gray-500 placeholder:text-[12px]  focus:border-b-white focus:transition-all  focus:duration-[0.2s]  "
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <p className="text-red-500 text-sm">
                {errors.usuario && "El usuario es requerido"}
              </p>

              <input
                className="outline-none p-2 appearance-none text-white font-poppins  placeholder:text-[12px]  border-b-1 border-gray-500  focus:border-b-white focus:transition-all  focus:duration-[0.2s] "
                placeholder="Contraseña"
                {...register("password", { required: true })}
                type={`${show ? "text" : "password"}`}
              />
              <p className="text-sm text-red-500">
                {errors.pass && "La contraseña es requerida"}
              </p>
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-92  top-[220px]  -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {show ? <EyeOff size={30} /> : <Eye size={30} />}
              </button>

              {error && <p className="text-red-500 font-poppins">{error}</p>}
              <button
                type="submit"
                className="bg-red-400 px-2 p-2 cursor-pointer rounded-2xl hover:bg-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4em"
                  height="4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
