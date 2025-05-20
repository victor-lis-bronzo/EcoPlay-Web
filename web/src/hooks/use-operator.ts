import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

import type { Operator, OperatorCreateInput } from "@/interfaces/operator";

export function useGetOperators() {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get<Operator[]>("/users");
      return response.data;
    },
  });
}

export function useGetOperatorById(id: number) {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get<Operator[]>(`/users/${id}`);
      return response.data;
    },
  });
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
  return useMutation({
    mutationFn: async (data: Operator) => {
      const response = await api.put(`/users/${data.operatorId}`, data);
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
}

export function useDeleteOperator() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await api.delete(`/users/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
