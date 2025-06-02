"use client";

import { useGetControllerByCode } from "@/hooks/use-controller";
import { UpdateControllerForm } from "@/modules/controllers/updateForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function EditControllerPage() {
  const params = useParams();
  const institutionId = Number(params.institutionId);
  const controllerCode = params?.controllerId as string;

  const { data: controller } = useGetControllerByCode(controllerCode);

  if (!controller) {
    return (
      <div>
        <h2>Totem não encontrado</h2>
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
        controller={controller}
      />
    </div>
  );
}
