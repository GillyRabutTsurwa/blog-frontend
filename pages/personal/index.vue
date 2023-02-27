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
        <button @click="toggleComponent">Toggle Map</button>
      </div>
    </div>
    <div class="about__card-or-map">
      <!-- <Map /> -->
      <!-- <ImageCards /> -->
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>
  
<script setup>
const randomNumber = ref(0);
const Map = resolveComponent("Map");
const ImageCards = resolveComponent("ImageCards");

const query = groq`*[_type == "about"]`;
const { data } = await useSanityQuery(query);
console.log(data.value);
const allIntros = data.value;
const techIntro = allIntros.find((currentIntro) => {
  return currentIntro.aboutTitle.includes("Personal");
});
const introText = techIntro.aboutText;


const route = useRoute();
const routeName = route.name;
console.log(routeName);

const titleCategory = computed(() => {
  return routeName.charAt(0).toUpperCase() + routeName.slice(1);
});

const currentComponent = computed(() => {
  return randomNumber.value % 2 === 0 ? ImageCards : Map;
});

const toggleComponent = () => {
  // NOTE: if randomNumber is even, make it odd on click
  if (randomNumber.value % 2 === 0) {
    randomNumber.value = 1;
  }
  // otherwise, it will be odd and make it even on click
  // NOTEIMPORTANT: else clause is needed. if statement and continuing to write code without else/else if will not work
  else {
    randomNumber.value = 0;
  }
  // NOTE: this, as well as the rest of the code in this commit, will also alow us to switch between our dynamic components on button click, and not just on mount
}

// NEW:
onMounted(() => {
  // NOTE: when component mount, generate a random number between 0 and 10
  //NOTE: even numbers will generate one component and odd will generate another
  randomNumber.value = Math.floor(Math.random() * 10);
})

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
  flex-wrap: wrap;
}

.about__links a,
.about__links a:link,
.about__links a:visited,
.about__links button {
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
.about__links a:active,
.about__links button:hover {
  background-color: #fff;
  color: #1a2934;
}


.about__card-or-map {
  display: grid;
  place-items: center;

  flex: 1 0 40%;
  height: 100%;
}
</style>