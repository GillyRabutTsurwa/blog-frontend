<template>
  <div class="container">
    <div v-for="(currentImage, index) in images" :key="currentImage.id" :class="myClasses[index]">
      <div :class="`${myClasses[index]}__img`">
        <!-- <img :src="currentBlok.filename" :alt="currentBlok.alt" /> -->
        <SanityImage :asset-id="currentImage.url" auto="format" />
      </div>
      <NuxtLink to="/personal" :class="`${myClasses[index]}__link`">
        <span :class="`${myClasses[index]}__link--text`">{{myClasses[index]}}</span>
      </NuxtLink>
    </div>
    <span>test tings</span>
  </div>
</template>
  
  <script setup>
// (async () => {
const query = groq`*[_type == "homeGrid"] {
    gridImages
}`;
const { data } = await useSanityQuery(query);
const imageData = data.value[0]; //NOTE: il n'y qu'un seul truc (objet) dans le tableau
console.log(imageData);

const images = imageData.gridImages.map((currentImage) => {
  return {
    id: currentImage._key,
    url: currentImage.asset._ref,
  };
});
console.log(images);
// })();

const myClasses = ["tech", "personal"];
</script>
  
  <style>
.container {
  width: 100%;
  height: 100vh;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); ne marche pas bien prkwa?*/
  grid-template-columns: repeat(2, calc(100vw / 2));
  grid-auto-rows: 1fr;
  overflow: hidden;
}
.container > * {
  width: 100%;
  /* height: 100%; ne marche pas */
  /* inherits 100vh from the parent */
  height: inherit;
  position: relative;
}
/* same as .personal a & .tech a */
.personal__link,
.tech__link {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.tech {
  border-right: 0.5rem black solid;
  grid-column: 1 / 2;
}
.personal {
  border-left: 0.5rem black solid;
  grid-column: 2 / 3;
}
.personal:hover .personal__img,
.tech:hover .tech__img {
  filter: blur(0);
}
.personal:hover .personal__link,
.tech:hover .tech__link {
  opacity: 1;
}
/* .personal:hover,
      .tech:hover {
        filter: blur(0);
      } */
.personal__img,
.tech__img,
.self__img {
  width: 100%;
  height: 100%;
  -webkit-filter: blur(10px);
  filter: blur(10px);
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.personal__img img,
.tech__img img,
.self__img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.personal__link--text,
.tech__link--text {
  position: absolute;
  bottom: 0rem;
  width: 100%;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  padding: 3rem 1.5rem;
  background-color: rgba(31, 19, 21, 0.6);
  color: rgb(197, 197, 199);
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>