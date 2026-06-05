import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  // كود مبسط متوافق تماماً مع محرك Next.js 16 بدون رموز معقدة تسبب انهيار الـ Build
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};