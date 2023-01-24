<template>
  <SanityContent :blocks="introText" />
</template>

<script setup>
const query = groq`*[_type == "about"]`;
const { data } = await useSanityQuery(query);
console.log(data.value);
const allIntros = data.value;
const techIntro = allIntros.find((currentIntro) => {
  return currentIntro.aboutTitle.includes("Tech");
});
console.log(techIntro);
// IMPORTANTNOTE:
/**
 * the value of the blocks prop text should be the array of the rendered blockContent/plain text
 * in this case, looking at the data, the value is the aboutText object property
 * better put, the value of the prop should be the name of the blockContent field defined whilst making the schema (look at about.js)
 * I believe that this should take care of modified text within, like bolded, underlined and italicised content
 * but I am yet to test this
 * ...
 * tested. it works
 */
const introText = techIntro.aboutText;
</script>

<style lang="scss" scoped>
</style>