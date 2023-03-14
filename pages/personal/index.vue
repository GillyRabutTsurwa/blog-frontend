<template>
  <div class="about">
    <div class="about-content">
      <h3 class="about__title">{{ titleCategory }} Posts</h3>
      <div class="about__paragraph">
        <SanityContent :blocks="introText" />
      </div>
      <div class="about__links">
        <NuxtLink to="/personal/posts">Personal Posts</NuxtLink>
        <NuxtLink :to="{ path: `/personal/posts`, query: { type: `unfiltered` } }">Unfiltered Posts</NuxtLink>
        <NuxtLink to="/tech">Tech Page</NuxtLink>
        <NuxtLink to="/tech/posts">Tech Posts</NuxtLink>
        <a href="https://gilbertrabuttsurwa.tech" target="_blank" rel="noreferrer">My Website</a>
      </div>
    </div>
    <div class="about__card-or-map" v-if="!showElement">
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
const introText = techIntro.aboutText;


const route = useRoute();
const routeName = route.name;
console.log(routeName);

const titleCategory = computed(() => {
  return routeName.charAt(0).toUpperCase() + routeName.slice(1);
});


const { showElement, toggleElementOnResize } = useBreakpoints();
if (process.client) window.addEventListener("resize", () => (toggleElementOnResize(1023)));

onMounted(() => {
  /** TESTING
   * PASS: @note - now upon page load screen sizes will be checked for
   * NOTE: this means that the components that need to be hidden will be hidden upon page load based on screen size
   * this was not initially the case, as i was using the window resize eventlistener...
   * .. which, obviously, will not fire on page load (which was what I needed)
   */
  if (process.client) toggleElementOnResize(1023);

})
</script>
  
<style lang="scss" scoped>
@use "@/assets/sass/abstracts/" as abstracts;

.about {
  width: 100%;
  height: 100%;
  /* margin: auto; */
  display: flex;

  @include abstracts.breakpoint(1023) {
    flex-direction: column;
  }
}

.about-content {
  flex: 1 1 60%;
}

.about-content:not(.about-content .about__title) {
  margin-left: 4rem;

  @include abstracts.breakpoint(1023) {
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

  @include abstracts.breakpoint(767) {
    flex-direction: column;
    text-align: center;
  }
}

.about__paragraph {
  font-size: 2rem;
  line-height: 2;

  @include abstracts.breakpoint(1023) {
    font-size: 2rem;
  }
}

.about__links {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 4rem;

  @include abstracts.breakpoint(1023) {
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
  font-size: 1.3rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 1.75rem 3rem;
  margin-top: 3rem;
  background-color: #1a2934;
  cursor: pointer;
  z-index: 10000;

  @include abstracts.breakpoint(1023) {
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