<script setup>
const route = useRoute();
console.log(route);
console.log(route.fullPath);

//NOTE: this code works great but i don't have a nice looking header. will comment it out until then
const isHeaderPlaced = computed(() => {
  // NOTE: locations that I do NOT want the Header to show
  return route.fullPath !== "/" && route.name !== "tech" && route.name !== "personal-posts-slug" && route.name !== "authentication";
});
</script>

<template>
  <figure v-if="isHeaderPlaced">
    <NuxtLink to="/">
      <img src="../assets/img/svg/my-logo.svg" alt="">
    </NuxtLink>
  </figure>
</template>

<style lang="scss" scoped>
figure {
  position: absolute;
  top: 0;
  left: 1rem;
  display: inline-block;
  width: 8rem;
  height: 8rem;
  z-index: 1000;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
