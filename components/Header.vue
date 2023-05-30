<script setup>
const query = groq`*[_type == "personal-post"]`;
const { data, pending, error } = await useSanityQuery(query);
pending.value = true; //NOTE: making pending value still true after info has loaded
const randomPost = computed(() => {
  return data.value[Math.floor(Math.random() * (data.value.length))];
});

const snippetLength = computed(() => {
  return showElement.value ? 300 : 1000;

});

function getSnippet(blockContent) {
  const body = blockContent
    .filter(block => block._type === "block")
    .map(block => block.children.map(child => child.text).join(""))
    .join('')
  return body.slice(0, snippetLength.value) + "...";
}


const { showElement, toggleElementOnResize } = useBreakpoints();

if (process.client) {
  window.addEventListener("resize", () => {
    toggleElementOnResize(480);
  })
};

onMounted(() => {
  if (process.client) {
    toggleElementOnResize(480);
  }

  setTimeout(() => {
    pending.value = false;
  }, 3000);
})
</script>
<template>
  <Loader v-if="pending" />
  <header v-else class="header">
    <div class="header__blog-intro">
      <h2>Featured Post</h2>
    </div>
    <div class="header__post">
      <div class="header__post--content">
        <h2 class="title">{{ randomPost.title }}</h2>
        <p class="text">{{ getSnippet(randomPost.body) }}</p>
        <Button isLink :path="`/personal/posts/${randomPost.slug.current}`" />
      </div>
    </div>
    <figure class="header__post--img">
      <SanityImage :asset-id="randomPost.thumbnail.asset._ref" auto="format" />
    </figure>
  </header>
</template>


<style lang="scss" scoped></style>