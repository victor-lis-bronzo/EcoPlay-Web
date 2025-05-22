import { redirect } from "next/navigation";

export default function EditIdLayout({ children, params }: { children: React.ReactNode; params: { id?: string } }) {
  const id = Number(params?.id);

  if (!id) {
    redirect("/institutions");
  }

  return (
    <>
      {children}
    </>
  );
}
