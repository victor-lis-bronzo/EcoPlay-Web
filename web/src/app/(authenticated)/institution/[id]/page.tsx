import TableHeaderComponent from "@/components/table/tableHeader";
import BottleCapCounter from "@/modules/app/BottleCapCount";
import ControllersGrid from "@/modules/controllers/controllersGrid";

export default function ControllersPage({
  params,
}: {
  params: { id: string };
}) {
  const institutionId = Number(params?.id);

  return (
    <div>
      <BottleCapCounter institutionId={institutionId} />
      <br />
      <TableHeaderComponent title="Lista de Totens" link={`/institution/${institutionId}/new`} />
      <ControllersGrid institutionId={institutionId} />
    </div>
  );
}
