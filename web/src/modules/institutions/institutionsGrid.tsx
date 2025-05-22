"use client";

import { useGetInstitutions } from "@/hooks/use-institution";
import InstitutionCard from "./institutionCard";
import { Loader2 } from "lucide-react";

export default function InstitutionsGrid() {
  const { data: institutions, isLoading } = useGetInstitutions();

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center h-40 gap-2">
        <span className="animate-spin text-primary">
          <Loader2 className="w-8 h-8" />
        </span>
        <span className="text-foreground text-xl font-medium">
          Carregando...
        </span>
      </div>
    );
  }

  if (!institutions || (institutions.length === 0 && !isLoading)) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="text-foreground text-xl">
          Nenhuma instituição encontrada.
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {institutions.map((institution) => (
        <InstitutionCard
          key={institution.institutionId}
          institution={institution}
        />
      ))}
    </div>
  );
}
