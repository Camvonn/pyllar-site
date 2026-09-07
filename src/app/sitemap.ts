import type { MetadataRoute } from "next";

// NOTE: uses the same placeholder domain as layout.tsx's metadataBase.
// Update once the real production domain is confirmed.
const BASE_URL = "https://www.pyllar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/features", "/pricing", "/demo"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
