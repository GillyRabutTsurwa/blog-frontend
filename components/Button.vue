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
  <button v-else class="button button-secondary">{{ props.text }}</button>
</template>

<style lang="scss" scoped>
@use "../assets/sass/abstracts/" as abstracts;

.button {
  padding: 2.5rem 3.5rem;

  &-primary {
    @include abstracts.button-config(1.5rem, 3.5rem, 3rem);
    font-size: 1.5rem;

    background-color: abstracts.$colour-primary;
    color: abstracts.$whitish;
    transition: transform 0.5s ease;

    &:active {
      transform: translateY(0.5rem);
    }
  }

  &-secondary {

    &,
    &:link,
    &:active {
      @include abstracts.button-config(1rem, 2.2rem, 0.5rem);
      background-color: abstracts.$colour-primary;
      color: abstracts.$whitish;
    }

    &:hover,
    &:active {
      background-color: abstracts.$whitish;
      color: abstracts.$colour-primary;
    }

    span {
      padding-right: 0.15rem;
    }
  }
}
</style>
