<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import HeroHeader from './components/HeroHeader.vue'

const Cutie = defineAsyncComponent(() => import('./components/NFTItem.vue'))
</script>

<template>
  <main>
    <HeroHeader />
    <div id="nft-grid">
      <Cutie uploader="Nick"><img src="./assets/precious/22-2-2.png"></Cutie>
      <Cutie uploader="Coach Gaming"><img src="./assets/precious/22-2-1.png"></Cutie>
      <Cutie uploader="Zoey"><img src="./assets/precious/21-12-1.png"></Cutie>
      <Cutie uploader="Francis"><img src="./assets/precious/21-11-2.png"></Cutie>
      <Cutie uploader="Zhang Yixing"><img src="./assets/precious/21-9-1.png"></Cutie>
      <Cutie uploader="Eric Nam"><img src="./assets/precious/22-2-3.png"></Cutie>
      <Cutie uploader="Rochelle"><img src="./assets/precious/21-4-1.png"></Cutie>
      <Cutie uploader="Shaun"><img src="./assets/precious/21-10-1.png"></Cutie>
      <Cutie uploader="Bill"><img src="./assets/precious/21-10-2.png"></Cutie>
      <Cutie uploader="Ellis"><img src="./assets/precious/21-7-2.png"></Cutie>
      <Cutie uploader="Eric Nam"><img src="./assets/precious/20-1.png"></Cutie>
      <Cutie uploader="Pills"><img src="./assets/precious/21-7-1.png"></Cutie>
      <Cutie uploader="Louis"><img src="./assets/precious/21-11-1.png"></Cutie>
    </div>
  </main>
  <footer>
    Made in Vue 3 Vite + TypeScript
  </footer>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: hsl(0, 0%, 21%);
  color: #f5f5f5;
  font-family: 'Noto Sans', Helvetica, Arial, sans-serif;
}

main, footer {
  max-width: 1400px;
  margin: 0 auto;
}

main {
  padding: 0 1.5ex;
}

footer {
  text-align: center;
  padding: 3rem 1ex;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
