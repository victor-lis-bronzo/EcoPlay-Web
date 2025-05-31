import TableHeaderComponent from "@/components/table/tableHeader";
import InstitutionsGrid from "@/modules/institutions/institutionsGrid";

export default function InstitutionsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
      <TableHeaderComponent
        title="Lista de Instituições"
        link="/institutions/new"
      />
      <InstitutionsGrid />
    </main>
  );
}
