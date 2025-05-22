import TableHeaderComponent from "@/components/table/tableHeader";
import InstitutionsGrid from "@/modules/institutions/institutionsGrid";

export default function InstitutionsPage() {
  return (
    <div>
      <TableHeaderComponent
        title="Lista de Instituições"
        link="/institutions/new"
      />
      <InstitutionsGrid />
    </div>
  );
}