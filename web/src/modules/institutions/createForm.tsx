"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useCreateInstitution } from "@/hooks/use-institution";
import InputDefault from "@/components/form/inputDefault";
import { Form } from "@/components/ui/form";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const FormSchema = z.object({
  name: z.string().min(3),
});

export function CreateInstitutionForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  const router = useRouter();

  const { mutate, isPending } = useCreateInstitution();

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    mutate(
      {
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
        className="space-y-6 w-full max-w-sm mx-auto p-8 rounded-xl shadow-lg bg-foreground"
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-bold text-background">
            Criar Instituição
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
            {isPending ? "Criando..." : "Criar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
