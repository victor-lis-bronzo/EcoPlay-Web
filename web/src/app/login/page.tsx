"use client";
import { LoginForm } from "@/modules/users/loginForm";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Login() {
	const session = useSession();
	const router = useRouter();
	useEffect(() => {
		if (session && session.data?.token) {
			router.push("/");
		}
	}, []);
	return (
		<section className="flex justify-center items-center w-full h-screen">
			<LoginForm />
		</section>
	);
}
