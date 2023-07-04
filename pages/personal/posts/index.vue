<script setup>
import { usePostsStore } from "@/stores/posts";
const store = usePostsStore();
store.fetchPosts();

const state = reactive({
  currentPage: 1,
  postsPerPage: 8
});

const indexOfLastPost = computed(() => {
  return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost = computed(() => {
  return indexOfLastPost.value - state.postsPerPage;
});

// this signifies the current posts on the page
const currentPosts = computed(() => {
  return store.filteredPosts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});

onUpdated(() => {
  console.log(currentPosts.value);
})

function renderPagination(eventPayload) {
  state.currentPage = eventPayload;
  console.log(eventPayload);
}
</script> 
  
<template>
  <div class="containertings">
    <Categories listDisplay="row" />
    <PostsPersonal :posts="store.filteredPosts" />
    <Pagination :postsPerPage="state.postsPerPage" :postsLength="store.filteredPosts.length"
      @paginate="renderPagination($event)" />
    <Newsletter />
  </div>
</template>
    
    
    
<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.containertings {
  display: flex;
  flex-direction: column;

  // @include abstracts.breakpoint(1023) {
  //   flex-direction: column;
  // }
}

.margin-top {
  margin-top: 4rem;
}
</style>