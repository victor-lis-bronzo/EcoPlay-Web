import TableHeaderComponent from "@/components/table/tableHeader";
import OperatorsTable from "@/modules/operators/table";

export default function OperatorsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
      <TableHeaderComponent title="Lista de Operadores" link="/operators/new" />
      <OperatorsTable />
    </main>
  );
}
