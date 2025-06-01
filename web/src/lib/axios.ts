import axios from "axios";
import { getAuthToken } from "./auth";

export const api = axios.create({
  baseURL: process.env.API_URL || process.env.NEXT_PUBLIC_API_URL,
  // withCredentials: true, // ✅ Mantenha isso se quiser enviar cookies ou headers de auth
});

// Adiciona o token Bearer automaticamente em cada requisição, se existir
// Interceptor para adicionar o token ao cabeçalho
api.interceptors.request.use(
  async (config) => {
    const token = await getAuthToken();

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
