<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Read Post"
  },
  isLink: {
    type: Boolean,
    default: true
  },
  path: {
    type: String,
    required: false
  }
})
</script>

<template>
  <NuxtLink v-if="props.isLink" :to="`${props.isLink ? props.path : null}`" class="button button-secondary">
    {{ props.text }}
  </NuxtLink>
  <button v-else class="button-secondary">Subscribe</button>
</template>

<style scoped></style>
