import React from "react";
import { useAuth } from "../store/useAuth";

export const Logout = () => {
  const { logout } = useAuth();
  return (
    <div>
      <button className="cursor-pointer" onClick={logout}>
        <svg
          className="hover:text-red-500 transition-all duration-[0.2s]"
          xmlns="http://www.w3.org/2000/svg"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
          />
        </svg>
      </button>
    </div>
  );
};
