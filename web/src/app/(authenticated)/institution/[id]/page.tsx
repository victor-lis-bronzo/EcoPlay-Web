"use client";
import TableHeaderComponent from "@/components/table/tableHeader";
import BottleCapCounter from "@/modules/app/BottleCapCount";
import ControllersGrid from "@/modules/controllers/controllersGrid";
import { useSearchParams } from "next/navigation";

export default function ControllersPage() {
  const searchParams = useSearchParams();
  const institutionId = Number(searchParams.get("institutionId"));
  if (!institutionId) {
    return <div>Instituição não encontrada</div>;
  }
  return (
    <div>
      <BottleCapCounter institutionId={institutionId} />
      <br />
      <TableHeaderComponent
        title="Lista de Totens"
        link={`/institution/${institutionId}/new`}
      />
      <ControllersGrid institutionId={institutionId} />
    </div>
  );
}
