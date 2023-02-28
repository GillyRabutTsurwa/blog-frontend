<template>
  <Header v-if="isHeaderPlaced" />
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
  return route.fullPath !== "/" && route.name !== "tech" && route.name !== "personal";
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
body,
#__nuxt {
  width: 100%;
  height: 100%;
}

#__nuxt {
  font-family: "Spartan", sans-serif;
}

/* ================================================= */
</style>