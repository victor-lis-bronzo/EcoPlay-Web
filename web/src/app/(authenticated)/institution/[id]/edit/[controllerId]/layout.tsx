import { redirect } from "next/navigation";

export default function EditIdLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id?: string; controllerId?: string };
}) {
  const id = Number(params?.controllerId);

  if (!id) {
    redirect("/institutions");
  }

  return <>{children}</>;
}
