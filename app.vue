<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import "vue3-marquee/dist/style.css";

const query = groq`*[_type == "post"]`;
const { data } = await useSanityQuery(query);
console.log(data);
</script>

