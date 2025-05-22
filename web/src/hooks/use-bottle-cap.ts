import api from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export function useGetBottleCapsByInstitutionId(id: number) {
  return useQuery({
    queryKey: ["bottle-caps-count", id],
    queryFn: async () => {
      const response = await api.get<number>(
        `/bottle-caps/institution-count/${id}`
      );
      return response.data;
    },
  });
}
