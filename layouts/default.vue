<template>
  <Navigation v-if="$route.path !== '/'" />
  <slot />
</template>