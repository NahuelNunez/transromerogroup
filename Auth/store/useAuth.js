import { create } from 'zustand';
import axios from 'axios';
const baseUrl = import.meta.env.VITE_API_URL;

export const useAuth = create((set) => ({
    user: null,
    login: async (credentials) => {
        try {
            const response = await axios.post(`${baseUrl}/auth/login`, credentials, {
                withCredentials: true,
            })
            console.log("Respuesta completa:", response.data);

            const { message, token } = response.data;
            if (token) {
                const userData = response.data;
                const now = new Date();
                const tokenExpiracion = new Date(now.getTime() + 2 * 60 * 60 * 1000)
                userData.tokenExpiration = tokenExpiracion.toISOString();


                localStorage.setItem('user', JSON.stringify(userData));
                set({ user: userData });
                return { data: userData, error: null }
            } else {
                return { data: null, error: message };

            }
        } catch (error) {
            console.error('Error de autenticación:', error);
            return { data: null, error: 'Error de autenticación' };
        }
    },
    logout: () => {
        localStorage.removeItem('user');
        set({ user: null });
    },
    loadUserFromLocalStorage: () => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            set({ user: JSON.parse(storedUser) });
        }
    }
}))