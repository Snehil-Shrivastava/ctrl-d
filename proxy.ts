import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/sign-in",
  },
});

export const config = {
  matcher: [
    /*
     * Protect all routes EXCEPT:
     * - sign-in, sign-up pages
     * - api/auth (NextAuth internals)
     * - _next/static, _next/image (Next.js internals)
     * - image/font/media files in /public
     */
    "/((?!sign-in|sign-up|api/auth|api/register|_next/static|_next/image|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.svg|.*\\.ico|.*\\.webp|.*\\.woff2?|.*\\.ttf).*)",
  ],
};
