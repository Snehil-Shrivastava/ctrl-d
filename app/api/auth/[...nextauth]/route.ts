import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID!,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    // }),
    // AppleProvider({
    //   clientId: process.env.APPLE_CLIENT_ID!,
    //   clientSecret: process.env.APPLE_CLIENT_SECRET!,
    // }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        // 🔧 Replace with your real DB lookup + bcrypt.compare
        // const user = await db.user.findUnique({ where: { email: credentials.email } });
        // if (!user) return null;
        // const valid = await bcrypt.compare(credentials.password, user.passwordHash);
        // if (!valid) return null;
        // return { id: user.id, name: user.name, email: user.email };

        // Placeholder — remove in production
        if (
          credentials.email === "demo@example.com" &&
          credentials.password === "xVScreations@2016"
        ) {
          return { id: "1", name: "Demo User", email: "demo@example.com" };
        }
        return null;
      },
    }),
  ],

  pages: {
    signIn: "/sign-in",
  },

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (session.user) (session.user as any).id = token.id;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
