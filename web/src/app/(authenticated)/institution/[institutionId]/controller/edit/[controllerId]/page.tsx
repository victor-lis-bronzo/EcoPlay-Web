"use client";

import { useGetControllerById } from "@/hooks/use-controller";
import { UpdateControllerForm } from "@/modules/controllers/updateForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function EditControllerPage() {
  const params = useParams();
  const institutionId = Number(params.id);
  const controllerId = Number(params?.controllerId);

  const { data: controller } = useGetControllerById(controllerId);

  if (!controller) {
    return (
      <div>
        <h2>Operador não encontrado</h2>
        <Link href="/institutions" className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20">
      <UpdateControllerForm
        institutionId={institutionId}
        controllerId={controllerId}
        controller={controller}
      />
    </div>
  );
}
