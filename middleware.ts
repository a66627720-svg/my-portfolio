import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // تخطي ملفات الـ static والـ Next internals تلقائياً
    '/((?!_next|[^?]*\\.(?:html|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest))).*',
    // تشغيل الـ middleware دائماً لعمليات الـ API والـ trpc
    '/(api|trpc)(.*)',
  ],
};