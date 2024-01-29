import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  adapter: vercel(),
  output: "server",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), svelte()]
});