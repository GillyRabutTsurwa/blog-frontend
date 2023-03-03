<template>
  <Post :postData="state.post" />
</template>
      
<script setup>
const route = useRoute();
const url = route.params.slug;
console.log(url);

const state = reactive({
  post: {},
});

//NOTE: observer le commentaire dans /personal/posts/[slug]/index.vue qui expliquent les changements du code
const query = groq`*[_type == "tech-post" && slug.current == "${url}"] {
  ...,
  author->
}`;
const { data, pending, error } = await useSanityQuery(query);
state.post = data.value[0];
console.log(state.post);
</script>