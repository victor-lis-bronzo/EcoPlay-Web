import { redirect } from "next/navigation";

export default function EditIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id?: string };
}) {
  console.log("params", params);

  const id = Number(params?.id);

  if (!id) {
    redirect("/operators");
  }

  return <>{children}</>;
}
