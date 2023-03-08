<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import "vue3-marquee/dist/style.css";

const query = groq`*[_type == "post"]`;
const { data } = await useSanityQuery(query);
console.log(data);
</script>

<!-- NOTEIMPORTANT: without a style tag defined in this file (app.vue) my  entire sass setup will NOT work. very bizzare behaviour -->
<!-- NOTE to self, a style tag must be defined here for the sass setup to work, even if it is empty -->
<!-- for the sake of it, i'll move this code from the reset sass helper file, here -->

<style lang="scss">
@use "@/assets/sass/abstracts/" as abstracts;
@import "@/assets/sass/main.scss";

#__nuxt {
  font-family: abstracts.$primaryFontStack;
}
</style>