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
        <button @click="toggleComponent" v-if="!showMarquee">Show {{ currentComponent.__name === "Map" ? "Card Pics" :
          "Map" }}</button>
      </div>
    </div>
    <div class="about__card-or-map" v-if="!showMarquee">
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

onMounted(() => {
  // NOTE: when component mount, generate a random number between 0 and 10
  //NOTE: even numbers will generate one component and odd will generate another
  randomNumber.value = Math.floor(Math.random() * 10);
})


watch(currentComponent, (newValue, oldValue) => {
  // NOTE: this is neat: i inspected the dynamic component object to fetch the name of the dynamic component to use in my template
  console.log(newValue);
})

// NEW:
// NOTE: this code works well using it in tech/index.vue
// will later put in composable
const showMarquee = ref(null);
if (process.client) {
  const mediaQueryList = window.matchMedia('(max-width: 1023px)');

  window.addEventListener("resize", () => {
    if (mediaQueryList.matches) {
      console.log('Window is max 1023px');
      showMarquee.value = true;
    }
    else {
      console.log('Window is over 1023px');
      showMarquee.value = false;
    }
  })
}


</script>
  
<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
  /* margin: auto; */
  display: flex;

  @include breakpoint(1023) {
    flex-direction: column;
  }
}

.about-content {
  flex: 1 1 60%;
}

.about-content:not(.about-content .about__title) {
  margin-left: 4rem;

  @include breakpoint(1023) {
    margin-left: 0;
  }
}

.about__title {
  margin: 6rem 0 4rem 0;
  text-align: center;
  font-size: 4rem;
}

.about__paragraph,
.about__links {
  width: 80%;
  margin: auto;

  @include breakpoint(767) {
    flex-direction: column;
    text-align: center;
  }
}

.about__paragraph {
  font-size: 2rem;
  line-height: 2;

  @include breakpoint(1023) {
    font-size: 2rem;
  }
}

.about__links {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @include breakpoint(1023) {
    flex-wrap: wrap;
    margin: 1rem auto 4rem auto;
    width: 80%;
  }
}

.about__links a,
.about__links a:link,
.about__links a:visited,
.about__links button {
  display: inline-block;
  border: 2px solid #1a2934;
  /*NOTE: debating between current colour and this colour: #071242. same for tech page */
  border-radius: 1rem;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 2rem 3rem;
  margin-top: 3rem;
  background-color: #1a2934;
  cursor: pointer;
  z-index: 10000;

  @include breakpoint(1023) {
    font-size: 1.25rem;
    padding: 1.75rem 2.25rem;
  }
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