<template>
  <div>
    <Header v-if="isHeaderPlaced" />
    <pre>{{ $route.name }}</pre>
    <slot />
  </div>
</template>

<script setup>
const route = useRoute();
console.log(route);
console.log(route.fullPath);

const isHeaderPlaced = computed(() => {
  return route.fullPath !== "/" && route.name !== "tech-posts-slug" && route.name !== "personal-posts-slug";
});
</script>

<style>
/* TODO: déplacer ce code vers qq'part plus approprié */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}
/* ================================================= */
</style>