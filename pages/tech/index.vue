<template>
  <div class="about">
    <h3 class="about__title">{{titleCategory}} Posts</h3>
    <SanityContent :blocks="introText" />

    <!-- <NuxtLink :to="`/${currentButton.cached_url}`" v-for="(currentButton, index) in state.buttons" :key="currentButton.id" target="_blank" class="button--green">
      {{changeBtnNames(index)}}
    </NuxtLink> -->
  </div>
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

// ====================================
const route = useRoute();
const routeName = route.name;
console.log(routeName);

const titleCategory = computed(() => {
  return routeName.charAt(0).toUpperCase() + routeName.slice(1);
});

const changeBtnNames = (unofficialName) => {
  switch (unofficialName) {
    case "button":
      unofficialName = `${routeName === "personal" ? "Tech" : "Personal"} Page`;
      break;
    case "button2":
      unofficialName = `${routeName === "personal" ? "Personal" : "Tech"} Posts`;
      break;
    case "button3":
      unofficialName = `${routeName === "personal" ? "Tech" : "Personal"} Posts`;
    default:
      break;
  }
  return unofficialName;
};
</script>

<style>
.about {
  width: 80vw;
  margin: auto;
}

.about__title {
  margin: 4rem 0;
  text-align: center;
  font-size: 4rem;
}

.about__paragraph {
  margin-bottom: 1.5rem;
}
</style>