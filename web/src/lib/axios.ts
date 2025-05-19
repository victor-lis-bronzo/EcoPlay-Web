import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/auth";
import axios, { type AxiosInstance } from "axios";
import { getServerSession, type Session } from "next-auth";
import { getSession } from "next-auth/react";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import process from "process";

export const dynamic = "force dynamic";
// Configuração da URL base
const api = axios.create({
	baseURL:
		process.env.API_URL ??
		process.env.NEXT_PUBLIC_API_URL ??
		"http://localhost:3344",
});

let session: Session | null = null;

// Função para obter a sessão (usando cache)
const fetchSession = async (): Promise<Session | null> => {
	if (session) {
		// Se a sessão já estiver no cache, retorna ela
		return session;
	}

	if (typeof window === "undefined") {
		// Ambiente servidor
		session = await getServerSession(nextAuthOptions);
	} else {
		// Ambiente cliente
		session = await getSession();
	}

	return session;
};

// Interceptor para adicionar o token ao cabeçalho
api.interceptors.request.use(
	async (config) => {
		const currentSession = await fetchSession(); // Busca a sessão, do cache ou nova

		const token =
			typeof currentSession?.token === "object" && currentSession?.token !== null
				? (currentSession.token as { user?: { token?: string } })?.user?.token?.toString()
				: undefined;
		if (token && config.headers) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// Função para limpar o cache da sessão
(api as AxiosInstance & { clearSessionCache: () => void }).clearSessionCache =
	() => {
		session = null; // Limpa o cache da sessão
	};

export default api as AxiosInstance & { clearSessionCache: () => void };
