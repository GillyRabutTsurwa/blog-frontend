<template>
  <div class="about">
    <div class="about-content">
      <h3 class="about__title">{{ titleCategory }} Posts</h3>
      <div class="about__paragraph">
        <SanityContent :blocks="introText" />
      </div>
      <div class="about__links">
        <NuxtLink to="/personal/posts">Personal Posts</NuxtLink>
        <NuxtLink to="/tech">Tech Page</NuxtLink>
        <NuxtLink to="/tech/posts">Tech Posts</NuxtLink>
      </div>
    </div>
    <div class="image-n-map">
      <!-- <Map /> -->
      <ImageCards />
    </div>
  </div>
</template>
  
<script setup>
const query = groq`*[_type == "about"]`;
const { data } = await useSanityQuery(query);
console.log(data.value);
const allIntros = data.value;
const techIntro = allIntros.find((currentIntro) => {
  return currentIntro.aboutTitle.includes("Personal");
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
  
<style scoped>
.about {
  width: 100%;
  height: 100%;
  /* margin: auto; */
  display: flex;
}

.about-content {
  flex: 1 1 60%;
}

.about-content:not(.about-content .about__title) {
  margin-left: 4rem;
}

.about__title {
  margin: 4rem 0;
  text-align: center;
  font-size: 4rem;
}

.about__paragraph,
.about__links {
  width: 80%;
  margin: auto;
}

.about__paragraph {
  line-height: 2;
}

.about__links {
  display: flex;
  justify-content: space-around;
}

.about__links a,
.about__links a:link,
.about__links a:visited {
  display: inline-block;
  border: 2px solid #1a2934;
  /*NOTE: debating between current colour and this colour: #071242. same for tech page */
  border-radius: 1rem;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 1.5rem 3rem;
  margin-top: 3rem;
  background-color: #1a2934;
  cursor: pointer;
  z-index: 10000;
}

.about__links a:hover,
.about__links a:active {
  background-color: #fff;
  color: #1a2934;
}


.image-n-map {
  /* to eventually centre the dynamic components */
  display: grid;
  place-items: center;

  flex: 1 0 40%;
  height: 100%;
}
</style>