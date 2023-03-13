<script setup>
const route = useRoute();
console.log(route);
console.log(route.fullPath);

//NOTE: this code works great but i don't have a nice looking header. will comment it out until then
const isHeaderPlaced = computed(() => {
  // NOTE: locations that I do NOT want the Header to show
  return route.fullPath !== "/" && route.name !== "tech" && route.name !== "personal-posts-slug" && route.name !== "auth";
});
</script>

<template>
  <nav v-if="isHeaderPlaced" class="navigation">
    <ul class="navigation__list">
      <li>
        <NuxtLink to="/auth">Login</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/auth">Register</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/auth">Back</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  position: absolute;
  top: 3rem;
  right: 45%;

  &__list {
    list-style: none;
    display: flex;

    li {
      margin-left: 1rem;
    }
  }
}

//dynamic classes
.centre {}

.right {}
</style>
