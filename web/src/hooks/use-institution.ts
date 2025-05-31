import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import type { Institution, InstitutionCreateInput } from "@/@types/institution";

export function useGetInstitutions() {
  return useQuery({
    queryKey: ["institutions"],
    queryFn: async () => {
      const response = await api.get<Institution[]>("/institutions");
      return response.data;
    },
  });
}

export function useGetInstitutionById(id: number) {
  return useQuery({
    queryKey: ["institution"],
    queryFn: async () => {
      const response = await api.get<Institution>(`/institutions/${id}`);
      return response.data;
    },
  });
}

export function useCreateInstitution() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: InstitutionCreateInput) => {
      const response = await api.post("/institutions", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["institutions"],
      });
    },
  });

  return mutation;
}

export function useUpdateInstitution() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Institution) => {
      const response = await api.put(
        `/institutions/${data.institutionId}`,
        data
      );
      return response.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["institutions"],
      });
      queryClient.invalidateQueries({
        queryKey: ["institutions", variables.institutionId],
      });
    },
  });
}

export function useDeleteInstitution() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const response = await api.delete(`/institutions/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["institutions"],
      });
    },
  });
}
