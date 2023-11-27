import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";
// 启用SSR

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact()],
  output: "server",
  adapter: vercel(),
});

// import { defineConfig } from 'astro/config';

// export default defineConfig({
//   output: 'static'
// })
