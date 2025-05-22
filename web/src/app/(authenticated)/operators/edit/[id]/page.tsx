"use client";

import { useGetOperatorById } from "@/hooks/use-operator";
import { UpdateOperatorForm } from "@/modules/operators/updateForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function EditOperatorPage() {
  const params = useParams();
  const operatorId = Number(params?.id);

  const { data: operator } = useGetOperatorById(operatorId);

  if (!operator) {
    return (
      <div>
        <h2>Operador não encontrado</h2>
        <Link href="/operators" className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20">
      <UpdateOperatorForm operatorId={operatorId} operator={operator} />
    </div>
  );
}
