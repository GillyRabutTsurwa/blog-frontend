<template>
  <Navigation v-if="$route.name !== 'index' && $route.name !== 'personal-posts-slug'" />
  <slot />
</template>