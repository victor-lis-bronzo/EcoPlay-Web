"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import { Menu, User, Users, Loader } from "lucide-react";
import Link from "next/link";

export default function NavigationMenu() {
	const { data: session, status } = useSession();

	if (status === "loading") {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger className="fixed bottom-6 right-6 bg-foreground shadow-lg rounded-full p-3 hover:bg-foreground/90 transition-colors flex items-center gap-2 z-50 cursor-pointer">
					<Loader className="w-6 h-6 text-background animate-spin" />
				</DropdownMenuTrigger>
			</DropdownMenu>
		);
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="fixed bottom-6 right-6 bg-foreground shadow-lg rounded-full p-3 hover:bg-foreground/90 transition-colors flex items-center gap-2 z-50 cursor-pointer">
				<Menu className="w-6 h-6 text-background" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="flex flex-col justify-start items-start mr-6 rounded-xl shadow-xl border border-background bg-foreground min-w-[180px]">
				<Link
					href={session?.payload?.name ? "/" : "/login"}
					className="flex items-center gap-2 text-background font-semibold px-3 py-2 cursor-pointer"
				>
					<User className="w-4 h-4 text-muted" />
					<span>{session?.payload?.name ?? "Login"}</span>
				</Link>
				{session?.payload?.type === "ADMIN" && (
					// biome-ignore lint/complexity/noUselessFragments: <explanation>
					<>
						<Link
							href="/operators"
							className="flex items-center gap-2 text-background font-semibold px-3 py-2 cursor-pointer"
						>
							<Users className="w-4 h-4 text-muted" />
							<span>Administradores</span>
						</Link>
					</>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
