import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export function useGetOperators() {
  const { data: dataSession, status } = useSession();
  const token = dataSession?.token?.user?.token;

  const isAuthenticated = status === "authenticated" && !!token;

  const query = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get("/users");
      return response.data;
    },
    enabled: isAuthenticated,
  });

  return { ...query, data: query.data };
}

export function useGetOperatorById(id: number) {
  const { data: dataSession, status } = useSession();
  const token = dataSession?.token?.user?.token;

  const isAuthenticated = status === "authenticated" && !!token;

  const query = useQuery({
    queryKey: ["users", id],
    queryFn: async () => {
      const response = await api.get(`/users/${id}`);
      return response.data;
    },
    enabled: isAuthenticated,
  });

  return { ...query, data: query.data };
}

export function useCreateOperator() {
  const queryClient = useQueryClient();
  const { data: dataSession, status } = useSession();
  const token = dataSession?.token?.user?.token;

  const mutation = useMutation({
    mutationFn: async (data: OperatorCreateInput) => {
      const response = await api.post("/users", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  return mutation;
}

export function useUpdateOperator() {
  const queryClient = useQueryClient();
  const { data: dataSession, status } = useSession();
  const token = dataSession?.token?.user?.token;

  const mutation = useMutation({
    mutationFn: async (data: Operator) => {
      const response = await api.put(`/users/${data.operatorId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
      queryClient.invalidateQueries({
        queryKey: ["users", variables.operatorId],
      });
    },
  });

  return mutation;
}

export function useDeleteOperator() {
  const queryClient = useQueryClient();
  const { data: dataSession, status } = useSession();
  const token = dataSession?.token?.user?.token;

  const mutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  return mutation;
}
