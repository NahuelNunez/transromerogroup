import axios from "axios";
import { create } from "zustand";

const baseUrl = import.meta.env.VITE_API_URL;

export const useExpresoCuyano = create((set) => ({
  promociones: [],
  postPromocion: async (data, token) => {
    try {
      const response = await axios.post(
        `${baseUrl}/expresoPromotions/create`,
        data,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return { data: response.data, error: null };
    } catch (error) {
      console.log("Error de autenticacion", error);
      return { data: null, error: error.response || "Error de autenticacion" };
    }
  },

  getPromocion: async (data) => {
    try {
      const response = await axios.get(`${baseUrl}/expresoPromotions/getAll`, {
        withCredentials: true,
      });
      set({ promociones: response.data });
      return { data: response.data, error: null };
    } catch (error) {
      console.error("Error de autenticacion", error);
      return { data: null, error: error.response || "Error de autenticacion" };
    }
  },
  editPromocion: async (data, id) => {
    try {
      const response = await axios.patch(
        `${baseUrl}/expresoPromotions/editPromo/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
      return { data: response.data, error: null };
    } catch (error) {
      console.error("Error de autenticacion", error);
      return { data: null, error: error.response || "Error de autenticacion" };
    }
  },
  deletePromocion: async (id, token) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/expresoPromotions/delPromo/${id}`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const refreshed = await axios.get(`${baseUrl}${url}getAll`, {
        withCredentials: true,
      });

      set({ promociones: refreshed.data });
      return { data: response.data, error: null };
    } catch (error) {
      console.error("Error al eliminar la promocion", error);
      return { data: null, error: error.response || "Error de autenticacion" };
    }
  },
}));
