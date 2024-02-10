import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { SanityCredentials, SanityAdapter } from "next-auth-sanity";
import sanityClient from "@/libs/sanity";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 1209600,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    SanityCredentials(sanityClient),
  ],
  adapter: SanityAdapter(sanityClient),
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth",
  },
  callbacks: {
    session: async ({ session, token }) => {
      const userEmail = token.email;
      const user = await sanityClient.fetch<{ _id: string }>(
        `*[_type == 'user' && email == $email][0]{_id}`,
        { email: userEmail }
      );
      console.log(user);
      return {
        ...session,
        user: {
          ...session.user,
          id: user._id,
        },
      };
    },
  },
};
