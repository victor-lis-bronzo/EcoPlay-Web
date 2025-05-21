"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useCreateOperator } from "@/hooks/use-operator";
import InputDefault from "@/components/form/inputDefault";
import InputPassword from "@/components/form/inputPassword";
import { Form } from "@/components/ui/form";

const FormSchema = z.object({
  username: z.string().min(3),
  name: z.string().min(3),
  password: z.string().min(8),
  type: z.enum(["USER", "ADMIN"], {
    errorMap: () => ({ message: "Tipo deve ser USER ou ADMIN" }),
  }),
});

export function CreateOperatorForm({
  hasAlreadyLobby = true,
}: {
  hasAlreadyLobby?: boolean;
}) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      name: "",
      password: "",
      type: "USER",
    },
  });

  const { mutate, isPending } = useCreateOperator();

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    mutate(
      {
        name: data.name,
        username: data.username,
        password: data.password,
        type: data.type,
      },
      {
        onSuccess: () => {
          form.reset();
        },
        onError: () => {},
      }
    );
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-3/4 lg:w-[40%] 2xl:w-1/3"
      >
        <DefaultInput
          control={form.control}
          name="name"
          label="Nome"
          placeholder="Nome do usuário"
        />
        <DefaultInput
          control={form.control}
          name="username"
          label="Username"
          placeholder="Username do usuário"
        />
        <DefaultInput
          control={form.control}
          name="password"
          label="Senha"
          placeholder="Digite a senha do usuário"
        />
        <InputDefault
          control={form.control}
          name="type"
          label="Tipo"
          placeholder="Tipo do usuário"
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isPending}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            {isPending ? "Criando..." : "Criar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
