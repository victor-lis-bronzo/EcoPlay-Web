import { useDeleteInstitution } from "@/hooks/use-institution";
import type { Institution } from "@/interfaces/institution";
import { Brush, Loader, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function InstitutionCard({
  institution,
}: {
  institution: Institution;
}) {
  const router = useRouter();

  const { mutate, isPending } = useDeleteInstitution();

  return (
    <Link
      href={`/institution/${institution.institutionId}`}
      key={institution.institutionId}
      className="bg-foreground hover:shadow-lg hover:scale-3d hover:scale-105 duration-150 rounded-xl shadow p-3 flex flex-col gap-1"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-muted">
          ID: {institution.institutionId}
        </span>
        <span
          className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${
            institution.status
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {institution.status ? "Ativo" : "Inativo"}
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-background">
          {institution.name}
        </h3>
        <p className="text-sm text-muted">
          Criado em: {new Date(institution.createdAt).toLocaleDateString()}
        </p>
        <p className="text-sm text-muted">
          Atualizado em: {new Date(institution.updatedAt).toLocaleDateString()}
        </p>
      </div>
      <div className="flex gap-3 mt-3 justify-end">
        <button
          type="button"
          onClick={() =>
            router.push(`/institutions/edit/${institution.institutionId}`)
          }
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
          title="Editar"
        >
          <Brush className="w-5 h-5" />
        </button>
        <button
          disabled={isPending}
          type="button"
          onClick={() => mutate(institution.institutionId)}
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
    </Link>
  );
}
