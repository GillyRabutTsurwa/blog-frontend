<script setup>
import { usePostsStore } from '@/stores/posts';

const state = reactive({
  currentPage: 1,
  postsPerPage: 8
});
const store = usePostsStore();
await store.fetchPosts();


const indexOfLastPost = computed(() => {
  return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost = computed(() => {
  return indexOfLastPost.value - state.postsPerPage;
});

const currentPosts = computed(() => {
  return store.filteredPosts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});

function renderPagination(eventPayload) {
  state.currentPage = eventPayload;
  console.log(eventPayload);
}

definePageMeta({
  layout: "default"
});

// onMounted(() => {
//   if (process.client) toggleElementOnResize(1023);
// });

onUpdated(() => {
  console.log(currentPosts.value);
})
</script>

<template>
  <Header />
  <FlexContainer>
    <Main>
      <template v-slot:post-list>
        <PostsPersonal :posts="currentPosts" />
      </template>
      <template v-slot:pagination>
        <Pagination :postsPerPage="state.postsPerPage" :postsLength="store.filteredPosts.length"
          @paginate="renderPagination($event)" />
      </template>
    </Main>
    <Aside />
  </FlexContainer>
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