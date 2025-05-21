import TableHeaderComponent from "@/components/table/tableHeader";
import OperatorsTable from "@/modules/operators/table";

export default function OperatorsPage() {
	return (
		<div>
			<TableHeaderComponent title="Lista de Operadores" link="/operators/new" />
			<OperatorsTable />
		</div>
	);
}
