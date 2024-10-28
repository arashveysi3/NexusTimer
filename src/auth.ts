import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createOrUpdateUser } from "@/actions/actions";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile }) {
      return await createOrUpdateUser({
        email: user.email,
        image: user.image,
        name: user.name,
      });
    },
  },
});
