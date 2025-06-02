"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useUpdateController } from "@/hooks/use-controller";
import InputDefault from "@/components/form/inputDefault";
import InputPassword from "@/components/form/inputPassword";
import { Form } from "@/components/ui/form";

import { useRouter, useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Controller } from "@/@types/controller";

const FormSchema = z.object({
  name: z.string().min(3),
});

export function UpdateControllerForm({
  institutionId,
  controller,
}: {
  institutionId: number;
  controller: Controller;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: controller.name,
    },
  });

  const { mutate, isPending } = useUpdateController();

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    mutate(
      {
        ...controller,
        name: data.name,
      },
      {
        onSuccess: () => {
          form.reset({
            name: "",
          });
          router.push(`/institution/${institutionId}/controller`);
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
            Atualizar Totem
          </h2>
          <Link
            href="/controllers"
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
          placeholder="Nome do totem"
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
