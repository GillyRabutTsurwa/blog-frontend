<script lang="ts" setup></script>

<template>
  <figure>
    <NuxtLink to="/">
      <img src="../assets/img/svg/my-logo.svg" alt="">
    </NuxtLink>
  </figure>
</template>

<style lang="scss" scoped>
figure {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  display: inline-block;
  width: 8rem;
  height: 8rem;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
