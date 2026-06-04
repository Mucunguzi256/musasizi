import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  // When on GitHub Pages, set site to "https://<user>.github.io/<repo>".
  // Netlify overrides this via its deploy settings, so both hosts are supported.
  site: process.env.CI
    ? "https://mucunguzi256.github.io/musasizi"
    : "https://henrymusasizi.ug",
  output: "static",
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
