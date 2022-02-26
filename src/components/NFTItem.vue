<script lang="ts" setup>
let yourDad = Math.random() * 3
let yourMom = yourDad.toFixed(2)

const props = defineProps<{
  uploader: string
}>()
</script>

<template>
  <div id="nft-item">
    <slot></slot>
    <hr>
    <div id="uploader">Uploaded by <strong>{{ uploader }}</strong></div>
    <div style="font-weight: 700;">
      <span>{{ yourMom }} <span style="opacity: 0.75;">ETH</span></span>
      <button>BUY</button>
    </div>
  </div>
</template>

<style lang="scss">
#nft-item {
  $lmao: 3px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 12px rgba(#292929, 60%);
  background: hsl(0, 0%, 25%);
  background-clip: padding-box;
  border: solid $lmao transparent;
  border-radius: 7px;
  row-gap: 5px;
  padding: 1rem;
  position: relative;

  &::before {
    content: '';
    border-radius: inherit;
    position: absolute;
    inset: 0 0 0 0;
    z-index: -1;
    margin: -$lmao;
    background: linear-gradient(69deg, rgb(1, 73, 93), rgb(82, 5, 76));
  }

  > img {
    border-radius: 7px;
    width: 100%;
    background: linear-gradient(to top, hsl(0, 0%, 32%), hsl(0, 0%, 42%));
  }

  &:hover {
    &::before {
      background: linear-gradient(69deg, rgb(3, 116, 148), rgb(145, 10, 133));
    }
  }
}

#uploader {
}

hr {
  border: 1px solid rgba(#aaa, 25%);
  margin-top: 3px;
}

div[style*='font-weight: 700'] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 125%;
}

button {
  border: 2px solid lightblue;
  background: royalblue;
  font-weight: 700;
  padding: 1ex 1.7ex;
  color: #f5f5f5;
  border-radius: 4px;
  transition: filter 200ms ease;
  font-family: 'Noto Sans', sans-serif;

  &:hover {
    filter: brightness(125%);
    box-shadow: 0 0 12px rgba(#000, 25%);
  }
}
</style>