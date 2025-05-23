import axios, { type AxiosInstance } from "axios";
import { getSession, signOut } from "next-auth/react";
import type { Session } from "next-auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

let cachedSession: Session | null = null;

api.interceptors.request.use(
  async (config) => {
    if (!cachedSession) {
      cachedSession = await getSession();
    }

    if (cachedSession?.token?.user?.token) {
      config.headers.Authorization = `Bearer ${cachedSession.token.user.token}`;
    }
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      error.response?.data?.code === "SESSION_INVALIDATED"
    ) {
      cachedSession = null;
      signOut({ callbackUrl: "/login" });
    }
    return Promise.reject(error);
  }
);
(api as AxiosInstance & { clearSessionCache: () => void }).clearSessionCache =
  () => {
    cachedSession = null;
  };

export default api as AxiosInstance & { clearSessionCache: () => void };
