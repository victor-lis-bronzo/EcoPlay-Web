import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    payload: {
      name: string;
      username: string;
      type: string;
    };
    token: {
      user: {
        token: string;
      };
    };
  }
}
