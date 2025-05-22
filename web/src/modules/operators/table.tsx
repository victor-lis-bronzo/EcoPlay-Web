"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";

import { useGetOperators } from "@/hooks/use-operator";
import OperatorTableRow from "./operatorTableRow";

export default function OperatorsTable() {
  const { data: operators, isLoading } = useGetOperators();

  return (
    <Table className="w-full min-w-md rounded-xl shadow-lg overflow-auto bg-foreground">
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
        {operators && operators?.length !== 0 ? (
          operators?.map((operator) => (
            <OperatorTableRow key={operator.operatorId} operator={operator} />
          ))
        ) : isLoading ? (
          <TableRow>
            <TableCell
              colSpan={6}
              className="text-center py-4 flex items-center w-full"
            >
              <Loader2 className="w-6 h-6 animate-spin text-muted" />
            </TableCell>
          </TableRow>
        ) : (
          <TableRow>
            <TableCell
              colSpan={6}
              className="text-center py-4 flex items-center w-full"
            >
              <h2 className="text-center text-muted font-semibold">
                No operators found
              </h2>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
