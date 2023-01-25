<template>
  <div class="about">
    <h3 class="about__title">{{titleCategory}} Posts</h3>
    <SanityContent :blocks="introText" />

    <Vue3Marquee>
      <span v-for="(word, index) in helloArray" :key="index" class="word-style" :class="{ word: true, odd: index % 2 === 0, even: index % 2 === 1 }">
        {{ word }}
      </span>
    </Vue3Marquee>
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

const helloArray = ["hello", "jambo", "bonjour", "こんにちは", "obrigado", "안녕하세요"];

// NOTE: not using this function right now
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

/* TESTING vue3marquee settings */
.word {
  font-size: 30px;
  margin: 0 10px;
}
.odd {
  color: rgb(68, 77, 84);
}
.even {
  color: rgb(137, 147, 156);
}
</style>