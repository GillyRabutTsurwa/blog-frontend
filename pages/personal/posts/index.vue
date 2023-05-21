<script setup>
import { usePostsStore } from "@/stores/posts";
const store = usePostsStore();
store.fetchPosts();
</script> 
  
<template>
  <div style="display: flex;">
    <PostList :posts="store.filteredPosts" />
    <div style="display: inherit; flex-direction: column; margin: 4rem 0; width: 100%;">
      <Categories />
      <h4 style="margin-bottom: 5rem;">Spotify Now playing Goes Here</h4>
      <Newsletter />
    </div>
  </div>
</template>
    
    
    
<style scoped>
.margin-top {
  margin-top: 4rem;
}
</style>