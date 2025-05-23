import { useDeleteController } from "@/hooks/use-controller";
import type { Controller } from "@/interfaces/controller";
import { Brush, Loader, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SendCountButton from "./sendCount";

export default function ControllerCard({
  controller,
}: {
  controller: Controller;
}) {
  const router = useRouter();

  const { mutate, isPending } = useDeleteController();

  return (
    <div
      // href={`/controller/${controller.controllerId}`}
      key={controller.controllerId}
      className="bg-foreground duration-150 rounded-xl shadow p-3 flex flex-col gap-1"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-muted">
          ID: {controller.controllerId}
        </span>
        <span
          className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
            controller.status
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {controller.status ? "Ativo" : "Inativo"}
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
        <SendCountButton code={controller.code} />
        <button
          disabled={isPending}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            mutate(controller.controllerId);
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
