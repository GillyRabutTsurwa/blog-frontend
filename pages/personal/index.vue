<script setup>
// sanity logic
const query = groq`*[_type == "about"]`;
const { data } = await useSanityQuery(query);
const allIntros = data.value;
const techIntro = allIntros.find((currentIntro) => {
  return currentIntro.aboutTitle.includes("Personal");
});
const introText = techIntro.aboutText;

const user = useSupabaseUser();

const route = useRoute();
const routeName = route.name;

const titleCategory = computed(() => {
  return routeName.charAt(0).toUpperCase() + routeName.slice(1);
});

const { showElement, toggleElementOnResize } = useBreakpoints();
if (process.client) window.addEventListener("resize", () => (toggleElementOnResize(1023)));

// NEW
definePageMeta({
  layout: "default"
});


onMounted(() => {
  if (process.client) toggleElementOnResize(1023);
})
</script>

<template>
  <Header />
  <div class="body-tings">
    <Main />
    <Aside />
  </div>
</template>
  
  
<style lang="scss" scoped>
@use "@/assets/sass/abstracts/" as abstracts;

.body-tings {
  display: flex;
  // margin: 2.5rem;

  @include abstracts.breakpoint(1023) {
    flex-direction: column;
  }
}
</style>