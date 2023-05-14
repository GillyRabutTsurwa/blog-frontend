<script setup>
const route = useRoute();
console.log(route.name);
console.log(route.path);
const hideNav = route.name === "index" && route.name === "personal-posts-slug";
</script>

<template>
  <Navigation v-if="$route.name !== 'index' && $route.name !== 'personal-posts-slug'" />
  <slot />
</template>