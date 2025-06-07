import { useDeleteController } from "@/hooks/use-controller";
import type { Controller } from "@/@types/controller";
import { Loader, Trash2 } from "lucide-react";
import { CircleNotch, Pencil } from "@phosphor-icons/react";
import SendCountButton from "./sendCount";
import { useGetCountByControllerCode } from "@/hooks/use-bottle-cap";
import { useEffect } from "react";
import ResetCountButton from "./resetCount";
import Link from "next/link";

export default function ControllerCard({
  controller,
}: {
  controller: Controller;
}) {
  const {
    data: count,
    refetch,
    isLoading,
  } = useGetCountByControllerCode(controller.code);
  const { mutate, isPending } = useDeleteController();

  return (
    <div
      // href={`/controller/${controller.controllerId}`}
      key={controller.code}
      className="bg-foreground duration-150 rounded-xl shadow p-3 flex flex-col gap-1"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-muted">ID: {controller.code}</span>
        <span
          className={
            "inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:opacity-90 cursor-pointer"
          }
          onClick={(e) => {
            if (isLoading) return;
            refetch();
          }}
        >
          {isLoading ? <CircleNotch className="size-3 animate-spin" /> : count}
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-background">{controller.name}</h3>
        <p className="text-sm text-muted">
          Código: <span className="font-mono">{controller.code}</span>
        </p>
        <p className="text-sm text-muted">
          Instituição: {controller.Institution?.name ?? "N/A"}
        </p>
        <p className="text-sm text-muted">
          Criado em: {new Date(controller.createdAt).toLocaleDateString()}
        </p>
      </div>
      <div className="flex gap-3 mt-3 justify-end">
        {/* <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            router.push(`/controller/edit/${controller.controllerId}`);
          }}
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
          title="Editar"
        >
          <Brush className="w-5 h-5" />
        </button> */}
        <ResetCountButton code={controller.code} />
        <SendCountButton code={controller.code} />
        <Link
          href={`/institution/${controller.Institution?.institutionId}/controller/edit/${controller.code}`}
          className={
            "text-blue-500 hover:text-blue-700 flex items-center justify-center"
          }
          title="Editar"
        >
          <Pencil className="w-5 h-5" />
        </Link>
        <button
          disabled={isPending}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            mutate(controller.code);
          }}
          className={`${
            isPending ? "text-gray-500" : "text-red-500 hover:text-red-700"
          } cursor-pointer`}
          title="Excluir"
        >
          {isPending ? (
            <Loader className="w-5 h-5 animate-spin" />
          ) : (
            <Trash2 className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
