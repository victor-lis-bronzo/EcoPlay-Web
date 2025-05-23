"use client";

import React from "react";
import { useSendCountByControllerCode } from "./../../hooks/use-bottle-cap";
import { RedoDot } from "lucide-react";

export default function SendCountButton({ code }: { code: string }) {
  const { mutate, isPending } = useSendCountByControllerCode();

  return (
    <button
      type="button"
      onClick={() => mutate({ code })}
      className="bg-blue-500 text-foreground px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer"
      disabled={isPending}
    >
      <RedoDot className={`w-4 h-4 ${isPending && "animate-spin"}`} />
      {isPending ? "Sincronizando..." : "Sincronizar"}
    </button>
  );
}
