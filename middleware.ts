import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// قفل كل المسارات في الموقع لإجبار المستخدم على تسجيل الدخول
const isProtectedRoute = createRouteMatcher(['/(.*)']);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)'
  ],
};