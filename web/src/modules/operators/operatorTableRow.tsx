import { TableCell, TableRow } from "@/components/ui/table";
import { useDeleteOperator } from "@/hooks/use-operator";
import type { Operator } from "@/interfaces/operator";
import { Brush, Loader2, Trash2 } from "lucide-react";
import Link from "next/link";

export default function OperatorTableRow({ operator }: { operator: Operator }) {
  const { mutate, isPending } = useDeleteOperator();

  return (
    <TableRow key={operator.operatorId} className="transition-colors">
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
          disabled={isPending}
          type="submit"
          onClick={() => mutate(operator.operatorId)}
          className={`${
            isPending ? "text-gray-500" : "text-red-500 hover:text-red-700"
          } cursor-pointer`}
        >
          {isPending ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Trash2 className="w-5 h-5" />
          )}
        </button>
      </TableCell>
    </TableRow>
  );
}
