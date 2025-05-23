import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/app.ts"], // ou seus arquivos principais
  format: ["cjs"],
  target: "es2022",
  sourcemap: true,
  clean: true,
  external: ["@prisma-client", "@/@prisma-client"], // <-- adicionado "@/@prisma-client"
});
