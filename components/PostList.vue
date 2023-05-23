<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
});

const snippetLength = computed(() => {
  return showElement.value ? 300 : 1000;
});

const { formatDate } = useFormatDate();
const { showElement, toggleElementOnResize } = useBreakpoints();


function getSnippet(blockContent) {
  const body = blockContent
    .filter(block => block._type === "block")
    .map(block => block.children.map(child => child.text).join(""))
    .join('')
  return body.slice(0, snippetLength.value) + "...";
}

if (process.client) {
  window.addEventListener("resize", () => {
    toggleElementOnResize(480);
  })
};

onMounted(() => {
  if (process.client) {
    toggleElementOnResize(480);
  }
});
</script>

<template>
  <h2>Posts</h2>
  <section class="picture-category">
    <div v-for="(currentPost, index) in props.posts" :key="currentPost._id" class="picture-category__caption blog item">
      <div class="picture-category__picture">
        <!-- <SanityImage :asset-id="currentPost.thumbnail.asset._ref" auto="format" /> -->
        <img :src="`https://source.unsplash.com/random/?nature&${index}`" alt="">
      </div>
      <!-- <h3 class="picture-category__caption--title">{{ currentPost.title }}</h3>
      <h5 style="font-weight: 500;">{{ formatDate(currentPost.publishedAt) }}</h5>
      <div class="picture-category__caption--paragraph">
        <p>{{ getSnippet(currentPost.body) }}</p>
      </div> 
      <NuxtLink :to="`/personal/posts/${currentPost.slug.current}`" class="button-secondary read-more">
        <span>Read Post</span> &rarr;
      </NuxtLink> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

// move this
.read-more {
  text-decoration: none;

  @include abstracts.breakpoint(480) {
    margin: 0 auto;
  }
}

h2 {
  position: relative;
  margin-top: 4rem;
  font-size: 4rem;
  left: 46%;

  @include abstracts.breakpoint(480) {
    left: 37.5%;
  }
}
</style>
