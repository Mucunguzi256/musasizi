import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://henrymusasizi.ug",
  integrations: [
    tailwind(),
    mdx(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/admin", "/admin/"],
        },
      ],
      sitemap: true,
    }),
  ],
});
