<script setup>
const props = defineProps({
  text: {
    type: String,
    default: "Read Post"
  },
  isLink: {
    type: Boolean,
    default: false
  },
  path: {
    type: String,
    required: false
  },
  colourPrimary: {
    type: String,
    required: false
  },
  colourSecondary: {
    type: String,
    required: true
  }
});

//NEW
const isHovered = ref(false)

//NEW
const btnStyles = computed(() => {
  return {
    backgroundColor: isHovered.value ? props.colourSecondary : props.colourPrimary,
    color: isHovered.value ? props.colourPrimary : props.colourSecondary,
  }
})
</script>

<template>
  <NuxtLink @mouseover="isHovered = true" @mouseleave="isHovered = false" v-if="props.isLink"
    :to="`${props.isLink ? props.path : null}`" class="button" :style="btnStyles">
    {{ props.text }}
  </NuxtLink>
  <button @mouseover="isHovered = true" @mouseleave="isHovered = false" v-else class="button" :style="btnStyles">
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
@use "../assets/sass/abstracts/" as abstracts;

.button {
  @include abstracts.button-config(1.5rem, 2.2rem, 0.5rem);
  font-size: 1.6rem;
  border: 2px solid transparent;
  transition: transform 0.5s ease;
  font-family: inherit;

  //NOTE: ça, je vais faire avec css et pas Javascript. pour mes besoins
  // dans ce cas-ci, je veux que la couleur du contour ne change pas
  &:hover,
  &:active {
    border: 2px solid abstracts.$colour-primary;
  }
}
</style>
