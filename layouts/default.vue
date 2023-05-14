<template>
  <Navigation v-if="$route.name !== 'index' && $route.name !== 'personal-posts-slug'" />
  <slot />
  <Footer v-if="$route.name !== 'index' && $route.name !== 'personal-posts-slug'" />
</template>