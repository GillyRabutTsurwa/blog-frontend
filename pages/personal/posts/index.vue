<template>
  <h3>{{ route.query.type ? capitalise(route.query.type) : "Personal" }} Posts</h3>
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
definePageMeta({
  middleware: ["auth"]
});

const state = reactive({
  posts: [],
});

const route = useRoute();
const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const query = `*[_type == "personal-post"]`;
const { data, error } = await useSanityQuery(query);
state.posts = data.value;

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