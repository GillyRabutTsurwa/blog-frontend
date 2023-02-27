<template>
  <div class="about">
    <h3 class="about__title">{{ titleCategory }} Posts</h3>
    <div class="about__text">
      <SanityContent :blocks="introText" />
    </div>

    <div class="marquee-container">
      <Vue3Marquee :pauseOnHover="true" v-for="index in 4" :key="index" :data-order="index">
        <i v-for="(currentIconName, index) in iconNames" :key="index" :class="setIconName(currentIconName)" class="word"
          @mouseover="iconHovered = true" @mouseleave="iconHovered = false"></i>
      </Vue3Marquee>
    </div>

    <!-- NOTE: until I learn about links: https://www.sanity.io/guides/portable-text-internal-and-external-links, this will do for now -->
    <div class="about__links">
      <NuxtLink to="/tech/posts">Tech Posts</NuxtLink>
      <NuxtLink to="/personal">Personal Page</NuxtLink>
      <NuxtLink to="/personal/posts">Personal Posts</NuxtLink>
      <a href="https://gilbertrabuttsurwa.tech" target="_blank">My Site</a>
    </div>

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
const introText = techIntro.aboutText;

// ====================================
const route = useRoute();
const routeName = route.name;
console.log(routeName);

const titleCategory = computed(() => {
  return routeName.charAt(0).toUpperCase() + routeName.slice(1);
});

const iconNames = [
  "html5",
  "css3",
  "sass",
  "codepen",
  "tailwindcss",
  "javascript",
  "typescript",
  "jquery",
  "vuejs",
  "nuxtjs",
  "svelte",
  "react",
  "gulp",
  "markdown",
  "git",
  "github",
  "php",
  "jest",
  "linux",
  ,
];

const iconHovered = ref(false);
const colouredOrBW = computed(() => {
  return iconHovered.value === true ? "plain colored" : "plain";
});

const setIconName = (iconName) => {
  return `devicon-${iconName}-${colouredOrBW.value}`;
};
</script>

<style scoped>
.about {
  /* NOTE: or make width: 100% or 100vw (or at least 90) and remove margin: auto. see what looks better */
  width: 80vw;
  height: 100vh;
  margin: auto;
  position: relative;
  /* overflow: hidden; */
}

.about__title {
  padding: 7rem 0 3rem 0;
  text-align: center;
  font-size: 4rem;
}

.about__text {
  width: 80%;
  margin: 0 auto;
  font-size: 1.25rem;
  line-height: 2;
}

/* = */
.word {
  font-size: 60px;
  margin: 0 25px;
}

.odd {
  color: rgb(68, 77, 84);
}

.even {
  color: rgb(137, 147, 156);
}

/* = */

.vue3-marquee {
  position: absolute;
}

.vue3-marquee[data-order="1"] {
  top: 0;
}

.vue3-marquee[data-order="2"] {
  width: 100%;
  top: 0;
  left: 840px;
  transform: rotate(90deg);
}

.vue3-marquee[data-order="3"] {
  bottom: 0;
}

.vue3-marquee[data-order="4"] {
  width: 100%;
  top: 0;
  right: 840px;
  transform: rotate(270deg);
}

.about__links {
  margin: 0 4rem 3rem 4rem;
  display: flex;
  justify-content: space-around;
}

.about__links a,
.about__links:link,
.about__links:visited {
  display: inline-block;
  border: 2px solid #1a2934;
  border-radius: 1rem;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 1.25rem 3rem;
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

/* .vue3-marquee:first-of-type {
  top: 0;
  left: 50%;
} */

/* .vue3-marquee:nth-of-type(2) {
  left: 50%;
  top: 0;
  transform: rotate(90deg);
  width: 95vw;
} */

/* .vue3-marquee:nth-of-type(3) {
  
  top: 0;
} */

/* .vue3-marquee:last-of-type {
  right: 50%;
  top: 0;
  transform: rotate(90deg);
  width: 95vw;
} */
</style>