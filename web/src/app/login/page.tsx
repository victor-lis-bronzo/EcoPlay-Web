import { LoginForm } from "../../modules/auth/loginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Login() {
  return (
    <section className="flex justify-center items-center w-full h-screen">
      <LoginForm />
    </section>
  );
}
