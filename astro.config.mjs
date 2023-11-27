import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

// 启用SSR
// import vercel from "@astrojs/vercel/serverless";
// output: "server",
// adapter: vercel()

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [preact()],
});

// import { defineConfig } from 'astro/config';

// export default defineConfig({
//   output: 'static'
// })
