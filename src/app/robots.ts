import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/projects"],
      disallow: ["/gallery", "/lab", "/api", "/_next"],
    },
    sitemap: "https://sebalee.com/sitemap.xml",
  };
}
