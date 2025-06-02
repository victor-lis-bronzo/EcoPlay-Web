import api from "@/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import type { Controller, ControllerCreateInput } from "@/@types/controller";

export function useGetControllers() {
  return useQuery({
    queryKey: ["controllers"],
    queryFn: async () => {
      const response = await api.get<Controller[]>("/controllers");
      return response.data;
    },
  });
}

export function useGetControllersByInstitutionId(id: number) {
  return useQuery({
    queryKey: ["controllers-institution", id],
    queryFn: async () => {
      const response = await api.get<Controller[]>(
        `/controllers/institution/${id}`
      );
      return response.data;
    },
  });
}

export function useGetControllerByCode(code: string) {
  return useQuery({
    queryKey: ["controller"],
    queryFn: async () => {
      const response = await api.get<Controller>(`/controllers/${code}`);
      console.log("useGetControllerById response", response.data);
      return response.data;
    },
  });
}

export function useCreateController() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: ControllerCreateInput) => {
      const response = await api.post("/controllers", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["controllers"],
      });
    },
  });

  return mutation;
}

export function useUpdateController() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Controller) => {
      const response = await api.put(`/controllers/${data.code}`, data);
      return response.data;
    },
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["controllers"],
      });
      queryClient.invalidateQueries({
        queryKey: ["controllers", variables.code],
      });
    },
  });
}

export function useDeleteController() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (code: string) => {
      const response = await api.delete(`/controllers/${code}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["controllers"],
      });
    },
  });
}
