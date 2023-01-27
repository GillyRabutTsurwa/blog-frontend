<template>
  <div class="about">
    <h3 class="about__title">{{titleCategory}} Posts</h3>
    <SanityContent :blocks="introText" />

    <Vue3Marquee :pauseOnHover="true">
      <i v-for="(currentIconName, index) in iconNames" :key="index" :class="setIconName(currentIconName)" class="word" @mouseover="iconHovered = true" @mouseleave="iconHovered = false"></i>
    </Vue3Marquee>

    <!-- NOTE: until I learn about links: https://www.sanity.io/guides/portable-text-internal-and-external-links, this will do for now -->
    <NuxtLink to="/personal">Personal Page</NuxtLink>
    <NuxtLink to="/tech/posts">Tech Posts</NuxtLink>
    <NuxtLink to="/personal/posts">Personal Posts</NuxtLink>

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
  "tailwindcss",
  "javascript",
  "typescript",
  "jquery",
  "vuejs",
  "nuxtjs",
  "svelte",
  "react",
  "gulp",
  "git",
  "github",
  "netlify",
  "vercel",
];

const iconHovered = ref(false);
const colouredOrBW = computed(() => {
  return iconHovered.value === true ? "plain colored" : "plain";
});

const setIconName = (iconName) => {
  return `devicon-${iconName}-${colouredOrBW.value}`;
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
  font-size: 60px;
  margin: 0 30px;
}

.word:first-child {
  margin-left: 0;
}

.word:last-child {
  margin-right: 0;
}
.odd {
  color: rgb(68, 77, 84);
}
.even {
  color: rgb(137, 147, 156);
}
</style>