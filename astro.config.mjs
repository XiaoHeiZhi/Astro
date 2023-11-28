import { defineConfig } from "astro/config";
// import preact from "@astrojs/preact";
// import vercel from "@astrojs/vercel";
// 启用SSR

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server"
  // adapter: vercel(),
  ,
  adapter: vercel()
});

// import { defineConfig } from 'astro/config';

// export default defineConfig({
//   output: 'static'
// })