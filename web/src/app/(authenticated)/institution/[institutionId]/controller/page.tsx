"use client";
import TableHeaderComponent from "@/components/table/tableHeader";
import BottleCapCounter from "@/modules/controllers/BottleCapCount";
import ControllersGrid from "@/modules/controllers/controllersGrid";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ControllersPage() {
  const searchParams = useParams();
  const institutionId = Number(searchParams.institutionId);
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
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
      <Link href="/institutions" className="flex items-center gap-2">
        <ArrowLeft size={16} />
        Voltar
      </Link>
      <BottleCapCounter institutionId={institutionId} />
      <br />
      <TableHeaderComponent
        title="Lista de Totens"
        link={`/institution/${institutionId}/controller/new`}
      />
      <ControllersGrid institutionId={institutionId} />
    </main>
  );
}
