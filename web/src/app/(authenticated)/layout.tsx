import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "../api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import IconText from "@/components/ui/icon";

export const metadata: Metadata = {
	title: "Painel",
};

export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(nextAuthOptions);
	if (!session) {
		redirect("/login");
	}
	return (
		<main className="flex flex-col gap-6 px-8 pb-28 max-w-4xl mx-auto">
			<header className="flex flex-col justify-center items-center pt-6">
				<IconText className="text-foreground" />
			</header>
			{children}
		</main>
	);
}
