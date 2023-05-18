<script setup>
const state = reactive({
  posts: [],
});

const query = `*[_type == "personal-post"]`;
const { data, error } = await useSanityQuery(query);
state.posts = data.value;

const { formatDate } = useFormatDate();
</script> 
  
<template>
  <div style="display: flex;">
    <PostList :posts="state.posts" />
    <div style="display: inherit; flex-direction: column; margin: 4rem 0; width: 100%;">
      <Categories />
      <!-- <h4 style="margin-bottom: 5rem;">Spotify Now playing Goes Here</h4> -->
      <Newsletter />
    </div>
  </div>
</template>
    
    
    
<style scoped>
.margin-top {
  margin-top: 4rem;
}
</style>