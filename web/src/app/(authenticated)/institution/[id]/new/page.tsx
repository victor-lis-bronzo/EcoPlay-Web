"use client";
import { CreateControllerForm } from "@/modules/controllers/createForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NewControllerPage() {
  const params = useParams();
  const institutionId = Number(params.id);

  if (!institutionId) {
    return (
      <div>
        <h2>Instituição não encontrada</h2>
        <Link href="/institutions" className="flex items-center gap-2">
          <ArrowLeft size={16} />
          Voltar
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20">
      <CreateControllerForm institutionId={institutionId} />
    </div>
  );
}
