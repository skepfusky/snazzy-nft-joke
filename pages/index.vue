<template>
  <!-- <header>
    <h2 class="text-center">A cutie collection</h2>
  </header> -->
  <main class="max-w-screen-2xl mx-auto">
    <div
      class="mt-12 grid place-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5"
    >
      <img
        class="md:h-[17rem] h-[15rem] md:w-[17rem] h-[15rem] rounded-2xl select-none hover:scale-[1.125] hover:rounded-none transition-scale duration-[275ms]"
        v-for="(img, index) in imgArray"
        :src="`/static/${img}.png`"
        :key="index"
        alt="Cutie"
      />
    </div>
  </main>
  <footer class="my-10 text-center text-white">
    <div>
      Created by
      <a
        class="underline text-purple-100 hover:text-purple-300 transition-color"
        href="https://twitter.com/skepfuskyjs"
        target="_blank"
        >@skepfuskyjs</a
      >
    </div>
    <div>
      Written in
      <a
        class="underline text-green-300 hover:text-green-400 transition-color"
        href="https://v3.nuxtjs.org/"
        target="_blank"
        >Nuxt 3</a
      >, deployed on
      <a
        class="underline text-gray-200 hover:text-gray-400 transition-color"
        href="https://vercel.com"
        target="_blank"
        >Vercel</a
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
let imgArray: string[] = [
  "20-1",
  "21-4-1",
  "21-7-1",
  "21-7-2",
  "21-9-1",
  "21-10-1",
  "21-10-2",
  "21-11-1",
  "21-11-2",
  "21-12-1",
  "22-2-1",
  "22-2-2",
  "22-2-3",
  "22-2-27",
  "22-3-23",
  "22-3-24",
  "22-3-29",
  "22-4-1",
  "22-6-2",
  "22-7-5"
]

let SITE_TITLE = "Cutie Collection"
let SITE_DESC = `This website contains ${imgArray.length} image(s) of this blue-orange cutie, created by @skepfuskyjs`

useHead({
  title: SITE_TITLE,
  meta: [
    { name: "description", content: SITE_DESC },
    { property: "og:title", content: SITE_TITLE },
    { property: "og:description", content: SITE_DESC },
    { property: "og:type", content: "website" },
    { name: "twitter:title", content: SITE_TITLE },
    { name: "twitter:description", content: SITE_DESC },
    { name: "twitter:creator", content: "@skepfuskyjs" },
    { name: "twitter:website", content: "@skepfuskyjs" }
  ]
})

</script>

<style>
body {
  @apply bg-gradient-to-t from-blue-900 to-orange-900;
}
</style>