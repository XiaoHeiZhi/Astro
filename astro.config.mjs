import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// 启用SSR
// import vercel from "@astrojs/vercel/serverless";

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
