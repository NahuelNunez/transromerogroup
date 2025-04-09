import axios from 'axios';
import { create } from 'zustand'

const baseUrl = import.meta.env.VITE_API_URL



export const useExpresoCuyano = create(() => ({
    postPromocion: async (data, token) => {
        try {
            const response = await axios.post(`${baseUrl}/expresoPromotions/create`, data, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return { data: response.data, error: null }
        } catch (error) {
            console.log('Error de autenticacion', error)
            return { data: null, error: error.response || 'Error de autenticacion' }
        }
    },

    getPromocion: async (data) => {
        try {
            const response = await axios.get(`${baseUrl}/expresoPromotions/getAll`, {
                withCredentials: true,

            })
            return { data: response.data, error: null };

        } catch (error) {
            console.error('Error de autenticacion', error)
            return { data: null, error: error.response || 'Error de autenticacion' };
        }
    }
}))


