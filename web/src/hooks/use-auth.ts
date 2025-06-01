import { AuthSession } from "@/@types/auth";
import { getAuthTokenPayload } from "@/lib/auth";
import api from "@/lib/axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: async (data: AuthSession) => {
      try {
        console.log("Logging in with data:", data);
        const response = await api.post("/auth/sign-in", data);
        console.log("Login response:", response.data);
        return response.data;
      } catch (err: any) {
        throw err.response.data;
      }
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await api.post("/auth/sign-out");
    },
    onSettled: () => {
      // Invalida a query sem forçar nova requisição
      queryClient.removeQueries({ queryKey: ["currentUser"] });
    },
  });
}

export function useCurrentUser() {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      const token = await getAuthTokenPayload();
      if (!token) throw new Error("No auth token found");
      const response = await api.get<AuthSession>(`/users/${token.sub}`);
      return response.data;
    },
    enabled: typeof window !== "undefined", // Só executa no client
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: false,
    refetchInterval: false,
    retry: false, // Não tenta novamente se falhar (opcional)
  });
}
