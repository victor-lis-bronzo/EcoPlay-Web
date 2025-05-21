"use client";

import TableHeaderComponent from "@/components/table/tableHeader";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Brush, Trash2 } from "lucide-react";

import { useGetOperators } from "@/hooks/use-operator";
import Link from "next/link";

export default function OperatorsTable() {
	const { data: operators } = useGetOperators();

	return (
		<>
			<TableHeaderComponent title="Lista de Operadores" link="/operators/new" />
			<Table className="w-full min-w-md rounded-xl shadow-lg overflow-hidden bg-foreground">
				<TableHeader className="border-b-2 border-background">
					<TableRow>
						<TableHead className="px-5 py-4 text-left text-base font-semibold text-muted">
							Operator ID
						</TableHead>
						<TableHead className="px-5 py-4 text-left text-base font-semibold text-muted">
							Name
						</TableHead>
						<TableHead className="px-5 py-4 text-left text-base font-semibold text-muted">
							Username
						</TableHead>
						<TableHead className="px-5 py-4 text-left text-base font-semibold text-muted">
							Status
						</TableHead>
						<TableHead className="px-5 py-4 text-left text-base font-semibold text-muted">
							Type
						</TableHead>
						<TableHead className="px-5 py-4 text-left text-base font-semibold text-muted">
							Actions
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{operators?.map((operator) => (
						<TableRow
							key={operator.operatorId}
							className="hover:bg-foreground/70 transition-colors"
						>
							<TableCell className="px-5 py-3 text-base text-gray-800">
								{operator.operatorId}
							</TableCell>
							<TableCell className="px-5 py-3 text-base text-gray-800">
								{operator.name}
							</TableCell>
							<TableCell className="px-5 py-3 text-base text-gray-800">
								{operator.username}
							</TableCell>
							<TableCell className="px-5 py-3 text-base">
								<span
									className={`inline-block px-2.5 py-1 rounded-full text-sm font-medium ${
										operator.status
											? "bg-green-100 text-green-800"
											: "bg-red-100 text-red-800"
									}`}
								>
									{operator.status ? "Active" : "Inactive"}
								</span>
							</TableCell>
							<TableCell className="px-5 py-3 text-base text-gray-800">
								{operator.type}
							</TableCell>
							<TableCell className="px-5 py-5 text-base flex items-center gap-2">
								<Link
									href={`/operators/edit/${operator.operatorId}`}
									className="text-blue-500 hover:text-blue-700"
								>
									<Brush className="w-5 h-5" />
								</Link>
								<button
									type="submit"
									onClick={() => alert("Item deletado!")}
									className="text-red-500 hover:text-red-700 cursor-pointer"
								>
									<Trash2 className="w-5 h-5" />
								</button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
