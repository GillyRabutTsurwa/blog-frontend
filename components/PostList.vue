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
  <section class="blogs">
    <!-- <div v-for="(currentPost, index) in props.posts" :key="currentPost._id" class="picture-category__caption blog item"> -->
    <div v-for="(currentPost, index) in props.posts" :key="currentPost._id" class="blogs__item">
      <div class="blogs__item--picture">
        <!-- <SanityImage :asset-id="currentPost.thumbnail.asset._ref" auto="format" /> -->
        <img :src="`https://source.unsplash.com/random/?nature&${index}`" alt="">
      </div>
      <!-- <h3 class="blogs__item--title">{{ currentPost.title }}</h3>
      <h5 style="font-weight: 500;">{{ formatDate(currentPost.publishedAt) }}</h5>
      <div class="blogs__item--snippet">
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

h2 {
  position: relative;
  margin-top: 4rem;
  font-size: 4rem;
  left: 46%;

  @include abstracts.breakpoint(480) {
    left: 37.5%;
  }
}

// =====================================
.blogs {
  &.second {
    grid-template-rows: 54rem -webkit-min-content;
    grid-template-rows: 54rem min-content;
  }

  &__item {

    // TESTING:
    &:nth-child(8n + 1) {
      grid-column: 1 / 3;
      grid-row: 1 / 5;
    }

    &:nth-child(8n + 2) {
      grid-column: 3 / 5;
      grid-row: 1 / 7;
    }

    &:nth-child(8n + 3) {
      grid-column: 5 / -1;
      grid-row: 1 / 4;
    }

    &:nth-child(8n + 4) {
      grid-column: 1 / 3;
      grid-row: 5 / 10;
    }

    &:nth-child(8n + 5) {
      grid-column: 5 / -1;
      grid-row: 4 / 7;
    }

    &:nth-child(8n + 6) {
      grid-column: 3 / 6;
      grid-row: 7 / 10;
    }

    &:nth-child(8n + 7) {
      grid-column: 6 / -1;
      grid-row: 7 / -1;
    }

    &:nth-child(8n + 8) {
      grid-column: 1 / 6;
      grid-row: 10 / 13;
    }

    @include abstracts.breakpoint(480) {
      grid-template-rows: 20rem repeat(4, -webkit-min-content);
      grid-template-rows: 20rem repeat(4, min-content);
    }


    &--picture {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }

    &--snippet {
      margin-bottom: 0;
    }

    .read-more {
      text-decoration: none;

      @include abstracts.breakpoint(480) {
        margin: 0 auto;
      }
    }
  }
}
</style>
