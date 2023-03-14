<template>
  <h3>Personal Posts</h3>
  <ul>
    <li v-for="(currentPost) in state.posts" :key="currentPost._id" class="">
      <NuxtLink :to="`/personal/posts/${currentPost.slug.current}`">
        <SanityImage :asset-id="currentPost.mainImage.asset._ref" auto="format" />
        <h4>{{ currentPost.title }}</h4>
        <p>{{ formatDate(currentPost.publishedAt) }}</p>
      </NuxtLink>
    </li>
  </ul>
</template>
    
    
<script setup>
const state = reactive({
  posts: [],
});

// TESTING
const user = useSupabaseUser();
console.log(user.value);
console.log(user)

const query = `*[_type == "personal-post"]`;
const { data, error } = await useSanityQuery(query);
state.posts = data.value;

// if there's no user
if (!user.value) {
  // NOTE: show only the posts that don't need authentication to be read
  state.posts = state.posts.filter((currentPost) => !currentPost.needsAuthentication)
}
else {
  //NOTE: otherwise, show all the posts
  state.posts = state.posts;
}

const { formatDate } = useFormatDate();
</script> 
    
<style scoped>
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 15rem));
  padding: 3rem;
  margin-top: 5rem;
}

h3 {
  text-align: center;
  margin-top: 4rem;
  font-size: 1.75rem;
}

li {
  text-align: center;
}

li:hover img,
li:active img {
  filter: grayscale(0);
}

li a,
li a:link,
li a:visited {
  color: currentColor;
  text-decoration: none;
}

/* TESTING */
img {
  width: 100%;
  height: 17.5rem;
  filter: grayscale(100%);
}
</style>