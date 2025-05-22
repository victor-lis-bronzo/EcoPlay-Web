"use client";

import { useGetInstitutionById } from "@/hooks/use-institution";
import { UpdateInstitutionForm } from "@/modules/institutions/updateForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function EditInstitutionPage() {
  const params = useParams();
  const institutionId = Number(params?.id);

  const { data: institution } = useGetInstitutionById(institutionId);

  if (!institution) {
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
      <UpdateInstitutionForm institutionId={institutionId} institution={institution} />
    </div>
  );
}
