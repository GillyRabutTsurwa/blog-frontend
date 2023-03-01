<template>
  <div class="container">
    <div v-for="(currentImage, index) in images" :key="currentImage.id" :class="myClasses[index]">
      <div :class="`${myClasses[index]}__img`">
        <!-- <img :src="currentBlok.filename" :alt="currentBlok.alt" /> -->
        <SanityImage :asset-id="currentImage.url" auto="format" />
      </div>
      <NuxtLink :to="`/${myClasses[index]}`" :class="`${myClasses[index]}__link`">
        <span :class="`${myClasses[index]}__link--text`">{{ myClasses[index] }}</span>
      </NuxtLink>
    </div>
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

// const myClasses = ["tech", "personal"];
const myClasses = ["personal", "tech"];
</script>
  
<style lang="scss">
.container {
  width: 100%;
  height: 100vh;
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); ne marche pas bien prkwa?*/
  grid-template-columns: repeat(2, calc(100vw / 2));
  grid-auto-rows: 1fr;
  overflow: hidden;

  @include breakpoint(767) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, calc(100vh / 2));
  }

  &>* {
    width: 100%;
    height: inherit;
    position: relative;
  }
}

// @todo - address duplicate code for personal and tech blocks. put them in mixins

.personal {
  grid-column: 1 / 2;

  @include breakpoint(767) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  &__link {
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

    &--text {
      position: absolute;
      bottom: 0rem;
      width: 100%;
      text-align: center;
      font-size: 5.5rem;
      font-weight: bold;
      padding: 3rem 1.5rem;
      background-color: rgba(31, 19, 21, 0.6);
      color: rgb(197, 197, 199);
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover &__img {
    filter: blur(0);
  }

  &:hover &__link {
    opacity: 1;
  }
}

// ============================================================

.tech {
  border-left: 0.5rem black solid;
  grid-column: 2 / 3;

  @include breakpoint(767) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    border-left: none;
  }

  &__link {
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

    &--text {
      position: absolute;
      bottom: 0rem;
      width: 100%;
      text-align: center;
      font-size: 5.5rem;
      font-weight: bold;
      padding: 3rem 1.5rem;
      background-color: rgba(31, 19, 21, 0.6);
      color: rgb(197, 197, 199);
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    -webkit-filter: blur(10px);
    filter: blur(10px);
    -webkit-transition: all 0.5s ease;
    transition: all 0.5s ease;


    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:hover &__img {
    filter: blur(0);
  }

  &:hover &__link {
    opacity: 1;
  }
}
</style>