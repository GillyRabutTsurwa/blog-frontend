<template>
  <div style="display: grid; place-items: center; height: 100%; overflow: hidden;">
    <h4>Tech Posts</h4>
    <div v-for="(currentPost) in state.posts" :key="currentPost._id">
      <NuxtLink :to="`/tech/posts/${currentPost.slug.current}`">
        <SanityImage :asset-id="currentPost.mainImage.asset._ref" auto="format" />
        <h4>{{ currentPost.title }}</h4>
      </NuxtLink>
    </div>
    <!-- <h2 style="font-size: 7rem">
      <span style="display: block;">Tech Posts Coming Soon</span>
      <span @click="goBack" style="font-size: 3rem; text-decoration: underline; cursor: pointer;">Click To Go Back</span>
    </h2> -->
  </div>
</template>
  
  
<script setup>
const state = reactive({
  posts: [],
});

// NOTE: temporary
const router = useRouter();

const query = groq`*[_type == "tech-post"]`;
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

const goBack = () => {
  router.back();
}
</script>
  
<style></style>