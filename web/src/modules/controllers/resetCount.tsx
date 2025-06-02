"use client";

import React from "react";
import { useResetCountByControllerCode } from "./../../hooks/use-bottle-cap";
import { ArrowClockwise, CircleNotch } from "@phosphor-icons/react";

export default function ResetCountButton({ code }: { code: string }) {
  const { mutate, isPending } = useResetCountByControllerCode();

  return (
    <button
      type="button"
      onClick={() => mutate({ code })}
      className="bg-blue-500 text-foreground px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2 text-sm font-semibold cursor-pointer"
      disabled={isPending}
    >
      {isPending ? (  
        <CircleNotch className="size-6 animate-spin" />
      ) : (
        <ArrowClockwise className="size-6" />
      )}
    </button>
  );
}
