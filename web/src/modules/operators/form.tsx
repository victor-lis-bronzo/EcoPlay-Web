"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { useCreateOperator } from "@/hooks/use-operator";
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
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const FormSchema = z.object({
	username: z.string().min(3),
	name: z.string().min(3),
	password: z.string().min(8),
	type: z.enum(["USER", "ADMIN"], {
		errorMap: () => ({ message: "Tipo deve ser USER ou ADMIN" }),
	}),
});

export function CreateOperatorForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			username: "",
			name: "",
			password: "",
			type: "USER",
		},
	});

	const router = useRouter();

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
					form.reset({
						username: "",
						name: "",
						password: "",
						type: "USER",
					});
					router.push("/operators");
				},
				onError: () => {},
			},
		);
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-6 w-full max-w-sm mx-auto p-8 rounded-xl shadow-lg bg-foreground"
			>
				<div className="flex items-center justify-between mb-5">
					<h2 className="text-2xl font-bold text-background">Criar Operador</h2>
					<Link
						href="/operators"
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
					placeholder="Nome do usuário"
				/>
				<InputDefault
					control={form.control}
					name="username"
					label="Username"
					className="text-background"
					inputClassName="bg-foreground border-background border-2"
					placeholder="Username do usuário"
				/>
				<InputPassword
					control={form.control}
					name="password"
					label="Senha"
					className="text-background"
					inputClassName="bg-foreground border-background border-2"
					placeholder="Digite a senha do usuário"
				/>
				<div>
					<label className="block text-background mb-1" htmlFor="type">
						Tipo
					</label>
					<Select
						onValueChange={(value) =>
							form.setValue("type", value as "USER" | "ADMIN")
						}
						value={form.watch("type")}
					>
						<SelectTrigger
							id="type"
							className="w-full bg-foreground border-background border-2 text-background"
						>
							<SelectValue placeholder="Tipo do usuário" />
						</SelectTrigger>
						<SelectContent className="z-10 bg-foreground">
							<SelectItem
								value="USER"
								className="hover:bg-foreground text-background hover:text-muted"
							>
								Usuário
							</SelectItem>
							<SelectItem
								value="ADMIN"
								className="hover:bg-foreground text-background hover:text-muted"
							>
								Administrador
							</SelectItem>
						</SelectContent>
					</Select>
					{form.formState.errors.type && (
						<p className="text-red-500 text-sm mt-1">
							{form.formState.errors.type.message}
						</p>
					)}
				</div>
				<div className="flex justify-end">
					<Button
						type="submit"
						disabled={isPending}
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-2/4 mt-3"
					>
						{isPending ? "Criando..." : "Criar"}
					</Button>
				</div>
			</form>
		</Form>
	);
}
