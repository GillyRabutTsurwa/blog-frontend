<template>
  <div>
    <h4>Personal Posts</h4>
    <div v-for="(currentPost) in state.posts" :key="currentPost._id">
      <NuxtLink :to="`/personal/posts/${currentPost.slug.current}`">
        <SanityImage :asset-id="currentPost.mainImage.asset._ref" auto="format" />
        <h4>{{ currentPost.title }}</h4>
      </NuxtLink>
    </div>
  </div>
</template>
    
    
  <script setup>
const state = reactive({
  posts: [],
});

const query = `*[_type == "personal-post"]`;
const { data, error } = await useSanityQuery(query);
state.posts = data.value;
console.log(state.posts);

//TODO: put this into a composable. as I'm using it elsewhere
const formatDate = (currentDate) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(currentDate).toLocaleDateString("en-GB", options);
};
</script>
    
    <style>
/* TESTING */
img {
  width: 5rem;
  height: 5rem;
}
</style>