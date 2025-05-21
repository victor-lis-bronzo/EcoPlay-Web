"use client";
import InputDefault from "@/components/form/inputDefault";
import InputPassword from "@/components/form/inputPassword";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
	credential: z
		.string()
		.min(5, {
			message: "O nome deve ter no mínimo 5 caracteres",
		})
		.max(24),
	password: z
		.string()
		.min(8, {
			message: "A senha deve ter no mínimo 8 caracteres",
		})
		.max(24),
});

export function LoginForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			credential: "",
			password: "",
		},
	});

	const router = useRouter();
	const [error, setError] = useState<string | null>(null);
	const onSubmit = async (data: z.infer<typeof FormSchema>) => {
		const result = await signIn("credentials", {
			credential: data.credential,
			password: data.password,
			redirect: false,
		});

		if (result?.ok) {
			router.replace("/dashboard");
			return;
		}

		if (result?.error) {
			if (result.error === "CredentialsSignin") {
				setError("Login incorreto");
				return;
			}

			if (result.error === "Request failed with status code 500") {
				setError("Usuário não encontrado ou inativo");
				return;
			}
		}

		setError("Erro de conexão com o servidor");
		return;
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col justify-center items-center gap-6 px-6 py-8 w-full max-w-md text-muted bg-foreground rounded-xl shadow-lg"
			>
				<div className="mb-4 flex flex-col items-center">
					<h1 className="text-5xl md:text-6xl font-extrabold text-muted">
						Eco-Play
					</h1>
					<h2 className="text-xl font-semibold text-background">
						Bem-vindo de volta
					</h2>
					<p className="text-sm text-gray-500">Faça login para continuar</p>
				</div>

				<div className="w-full flex flex-col gap-4">
					<InputDefault
						control={form.control}
						name="credential"
						label="E-mail ou nome de usuário"
						type="text"
						placeholder="Seu e-mail ou nome de usuário"
						className="w-full text-background"
						inputClassName="bg-gray-150"
					/>
					<InputPassword
						control={form.control}
						name="password"
						label="Senha"
						placeholder="Digite sua senha"
						className="w-full text-background bg-foreground"
						inputClassName="bg-gray-150"
					/>
				</div>

				<Button type="submit" className="w-full mt-4">
					Entrar
				</Button>
				{error && (
					<div className="p-2 border border-red-500 rounded-md w-full text-center text-red-500 text-sm bg-red-50 mt-2">
						{error}
					</div>
				)}
			</form>
		</Form>
	);
}
