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
  // `next dev` and `next build` both write to `.next` by default, so running a
  // dev server and a production server side by side makes each wipe the
  // other's output. Setting NEXT_DIST_DIR lets the production build live
  // somewhere else (see `npm run preview`).
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
