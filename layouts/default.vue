<template>
  <Logo v-if="isHeaderPlaced" />
  <!-- <pre>{{ $route.name }}</pre> -->
  <slot />
</template>

<script setup>
const route = useRoute();
console.log(route);
console.log(route.fullPath);

//NOTE: this code works great but i don't have a nice looking header. will comment it out until then
const isHeaderPlaced = computed(() => {
  // NOTE: locations that I do NOT want the Header to show
  return route.fullPath !== "/" && route.name !== "tech" && route.name !== "personal-posts-slug";
});
</script>

<style></style>
