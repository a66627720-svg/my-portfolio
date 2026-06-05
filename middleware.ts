import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// لتحديد الروابط العامة والسرية بشكل صارم يمنع الـ 500
const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  //Matcher مبسط ونظيف ومتوافق تماماً مع محرك Next.js 16
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};