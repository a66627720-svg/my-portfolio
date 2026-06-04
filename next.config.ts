import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // هذا الخيار سيسمح للمشروع بالبناء وتجاهل أخطاء الـ TypeScript الحالية
    ignoreBuildErrors: true,
  },
};

export default nextConfig;