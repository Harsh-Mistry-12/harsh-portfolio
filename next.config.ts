import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // @ts-ignore - Next.js config types might be out of sync
  allowedDevOrigins: ["172.26.80.1", "localhost", "uncertain-unceded-shaquana.ngrok-free.dev"],
};

export default nextConfig;
