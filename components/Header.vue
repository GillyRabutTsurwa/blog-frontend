<script setup>
const query = groq`*[_type == "personal-post"]`;
const { data, error } = await useSanityQuery(query);
const randomPost = computed(() => {
  return data.value[Math.floor(Math.random() * data.value.length - 1)];
});
console.log(randomPost.value);

function getSnippet(blockContent) {
  const body = blockContent
    .filter(block => block._type === "block")
    .map(block => block.children.map(child => child.text).join(""))
    .join('')
  return body.slice(0, 1500) + "...";
}
</script>
<template>
  <header class="header">
    <div class="header__blog-intro">
      <h2>Post of The Day</h2>
    </div>
    <div class="header__post">
      <div class="header__post--content">
        <h2 class="title">{{ randomPost.title }}</h2>
        <p class="text">{{ getSnippet(randomPost.body) }}</p>
        <NuxtLink :to="`/personal/posts/${randomPost.slug.current}`" class="button button-secondary">Read Post</NuxtLink>
      </div>
    </div>
    <figure class="header__post--img">
      <SanityImage :asset-id="randomPost.thumbnail.asset._ref" auto="format" />
    </figure>
  </header>
</template>


<style lang="scss" scoped>
@use "@/assets/sass/layout/header";
</style>