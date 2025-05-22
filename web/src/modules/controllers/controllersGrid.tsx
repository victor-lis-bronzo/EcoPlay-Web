"use client";

import { useGetControllersByInstitutionId } from "@/hooks/use-controller";
import ControllerCard from "./controllerCard";
import { Loader2 } from "lucide-react";

export default function ControllerGrid({
  institutionId,
}: {
  institutionId: number;
}) {
  const { data: controller, isLoading } =
    useGetControllersByInstitutionId(institutionId);

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

  if (!controller || (controller.length === 0 && !isLoading)) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="text-foreground text-xl">
          Nenhum totem encontrado.
        </span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {controller.map((controller) => (
        <ControllerCard key={controller.controllerId} controller={controller} />
      ))}
    </div>
  );
}
