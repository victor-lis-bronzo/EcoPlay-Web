declare namespace NodeJS {
  interface ProcessEnv {
    SECRET_JWT_KEY: string;
    API_URL: string;
    NEXT_PUBLIC_API_URL: string;
    NEXTAUTH_SECRET: string;
  }
}
