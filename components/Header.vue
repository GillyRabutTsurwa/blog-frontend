<template>
  <header class="header">
    <div class="header__video">
      <video class="header__video--content" autoplay muted loop>
        <source src="@/assets/video/bg-video.mp4" type="video/mp4">
        Yo. Your browser is <strong>not</strong> supported
      </video>
    </div>
    <div class="header__title">
      <h1 class="header__title--primary">Tours & Travels</h1>
      <h2 class="header__title--secondary">Amazing Places on Earth</h2>
      <button class="button-primary">Explore</button>
    </div>
  </header>
</template>

<script setup>
</script>

<style lang="scss" scoped>
@use "@/assets/sass/layout/header";
</style>