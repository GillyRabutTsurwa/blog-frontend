<script setup>
import { usePostsStore } from "@/stores/posts";
const store = usePostsStore();
store.fetchPosts();
</script> 
  
<template>
  <div class="containertings">
    <Categories class="row" />
    <PostList :posts="store.filteredPosts" />
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