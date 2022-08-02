import { defineNuxtConfig } from "nuxt"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true,
    shim: false
  },
  modules: [
    "@nuxtjs/tailwindcss", 
    // "@nuxt/image-edge"
  ],
  // @nuxtjs/tailwindcss config
  tailwindcss: {
    viewer: false
  },
  // @nuxt/image-edge config
  // image: {
  //   presets: {
  //     avatar: {
  //       modifiers: {
  //         format: "webp",
  //         width: 269,
  //         height: 269
  //       }
  //     }
  //   }
  // }
})
