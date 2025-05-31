import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useGetCountByInstitutionId(institutionId: number) {
  return useQuery({
    queryKey: ["bottle-caps-count-by-institution", institutionId],
    queryFn: async () => {
      const response = await api.get<number>(
        `/bottle-caps/institution-count/${institutionId}`
      );
      return response.data;
    },
  });
}

export function useGetCountByControllerCode(code: string) {
  return useQuery({
    queryKey: ["bottle-caps-count-by-controller", code],
    queryFn: async () => {
      const response = await api.get<number>(
        `/bottle-caps/controller-count/${code}`
      );
      return response.data;
    },
  });
}

export function useSendCountByControllerCode() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({ code }: { code: string }) => {
      const response = await api.post(
        `/bottle-caps/controller-send-count/${code}`
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bottle-caps-send-count"],
      });
    },
  });

  return mutation;
}
