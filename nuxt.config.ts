// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path"
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [path.resolve(__dirname, "assets/css/main.css")],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
