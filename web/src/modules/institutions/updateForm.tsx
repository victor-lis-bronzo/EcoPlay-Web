"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  useGetInstitutionById,
  useUpdateInstitution,
} from "@/hooks/use-institution";
import InputDefault from "@/components/form/inputDefault";
import InputPassword from "@/components/form/inputPassword";
import { Form } from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Institution } from "@/@types/institution";

const FormSchema = z.object({
  name: z.string().min(3),
});

export function UpdateInstitutionForm({
  institutionId,
  institution,
}: {
  institutionId: number;
  institution: Institution;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: institution.name,
    },
  });

  const { mutate, isPending } = useUpdateInstitution();

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    mutate(
      {
        ...institution,
        name: data.name,
      },
      {
        onSuccess: () => {
          form.reset({
            name: "",
          });
          router.push("/institutions");
        },
        onError: () => {},
      }
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full max-w-md mx-auto p-8 rounded-xl shadow-lg bg-foreground"
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-background">
            Atualizar Instituição
          </h2>
          <Link
            href="/institutions"
            className="bg-background hover:bg-muted text-foreground border border-input rounded-md px-4 py-2 flex items-center transition-colors"
          >
            <ArrowLeft size={17} className="mr-1 text-foreground" />
            Voltar
          </Link>
        </div>
        <InputDefault
          control={form.control}
          name="name"
          label="Nome"
          className="text-background"
          inputClassName="bg-foreground border-background border-2"
          placeholder="Nome da instituição"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="bg-background hover:bg-muted text-white font-bold py-2 px-4 rounded w-2/4 mt-3"
          >
            {isPending ? "Atualizando..." : "Atualizar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
