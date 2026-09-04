import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root explicitly. Without this, Next.js/Turbopack can
  // walk up and pick up an unrelated lockfile from a parent directory (e.g.
  // a sibling project in the same home directory) and emit a root-inference
  // warning.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
