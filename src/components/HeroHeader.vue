<template>
  <div id="hero">
    <h1><span><i>Yes</i> NFTs</span></h1>
    <p>Come and get em while it's hot</p>
  </div>
</template>

<style scoped>
#hero {
  text-align: center;
  margin: 2.1rem 0;
  font-size: 125%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

h1::before, h1::after {
  content: '✨';
}

h1 > span {
  background: linear-gradient(to right, orchid, royalblue, orchid, royalblue);
  background-size: 300%;
  animation: smoothItBaby 3s infinite linear;
  font-size: 135%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes smoothItBaby {
  to {background-position: right}
  from {background-position: left}
}
</style>