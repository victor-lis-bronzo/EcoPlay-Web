"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/hooks/use-auth";
import { Menu, User, Users, Loader, House, Building2 } from "lucide-react";
import Link from "next/link";

export default function NavigationMenu() {
  const { data: user, isLoading } = useCurrentUser();
  console.log("Current User:", user);

  const isAuthenticated = !!user;

  return (
    <DropdownMenu>
      {!isLoading && (
        <DropdownMenuTrigger className="fixed bottom-6 right-6 bg-foreground shadow-lg rounded-full p-3 hover:bg-foreground/90 transition-colors flex items-center gap-2 z-50 cursor-pointer">
          <Menu className="w-6 h-6 text-background" />
        </DropdownMenuTrigger>
      )}
      <DropdownMenuContent className="flex flex-col justify-start items-start mr-6 rounded-xl shadow-xl border border-background bg-foreground min-w-[180px]">
        <Link
          href="/"
          className="flex items-center gap-2 text-background font-semibold px-3 py-2 cursor-pointer"
        >
          <House className="w-4 h-4 text-muted" />
          <span>Home</span>
        </Link>
        <Link
          href={isAuthenticated ? "/" : "/login"}
          className="flex items-center gap-2 text-background font-semibold px-3 py-2 cursor-pointer"
        >
          <User className="w-4 h-4 text-muted" />
          <span>{user?.name || "Login"}</span>
        </Link>
        {user && user.type === "ADMIN" && (
          // biome-ignore lint/complexity/noUselessFragments: <explanation>
          <>
            <Link
              href="/operators"
              className="flex items-center gap-2 text-background font-semibold px-3 py-2 cursor-pointer"
            >
              <Users className="w-4 h-4 text-muted" />
              <span>Administradores</span>
            </Link>
            <Link
              href="/institutions"
              className="flex items-center gap-2 text-background font-semibold px-3 py-2 cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-muted" />
              <span>Instituições</span>
            </Link>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
