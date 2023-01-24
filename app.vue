<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const query = groq`*[_type == "post"]`;
const { data } = await useSanityQuery(query);
console.log(data);
</script>