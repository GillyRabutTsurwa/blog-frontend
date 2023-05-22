<script setup>
import { usePostsStore } from "@/stores/posts";
const store = usePostsStore();
store.fetchPosts();
</script> 
  
<template>
  <div class="containertings">
    <PostList :posts="store.filteredPosts" />
    <div style="display: inherit; flex-direction: column; margin: 4rem 0; width: 100%;">
      <Categories />
      <h4 style="margin-bottom: 5rem;">Spotify Now playing Goes Here</h4>
      <Newsletter />
    </div>
  </div>
</template>
    
    
    
<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.containertings {
  display: flex;

  @include abstracts.breakpoint(1023) {
    flex-direction: column;
  }
}

.margin-top {
  margin-top: 4rem;
}
</style>