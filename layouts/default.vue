<template>
  <Navigation v-if="$route.name !== 'index' && $route.name !== 'personal-posts-slug'" />
  <slot />
  <Footer v-if="$route.name !== 'index' && $route.name !== 'personal-posts-slug' && $route.name !== 'tech-posts-slug'" />
</template>