<template>
  <SanityContent :blocks="introText" />
</template>

<script setup>
/**
 * NOTE: look at notes at pages/tech/index.vue to understand this code
 */
const query = groq`*[_type == "about"]`;
const { data } = await useSanityQuery(query);
console.log(data.value);
const allIntros = data.value;
const personalIntro = allIntros.find((currentIntro) => {
  return currentIntro.aboutTitle.includes("Personal");
});
console.log(personalIntro);
const introText = personalIntro.aboutText;
</script>

<style lang="scss" scoped>
</style>