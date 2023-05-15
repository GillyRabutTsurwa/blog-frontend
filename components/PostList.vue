<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
});

const { formatDate } = useFormatDate();

function getSnippet(blockContent) {
  const body = blockContent
    .filter(block => block._type === "block")
    .map(block => block.children.map(child => child.text).join(""))
    .join('')
  return body.slice(0, 500) + "...";
}
</script>

<template>
  <section class="picture-category">
    <div v-for="currentPost in props.posts" :key="currentPost._id" class="picture-category__caption blog">
      <div class="picture-category__picture">
        <SanityImage :asset-id="currentPost.thumbnail.asset._ref" auto="format" />
      </div>
      <h3 class="picture-category__caption--title">{{ currentPost.title }}</h3>
      <h5 style="font-weight: 500;">{{ formatDate(currentPost.publishedAt) }}</h5>
      <div class="picture-category__caption--paragraph">
        <!-- <SanityContent :blocks="currentPost.body" :serializers="serializers" /> -->
        <p>{{ getSnippet(currentPost.body) }}</p>
      </div>
      <NuxtLink :to="`/personal/posts/${currentPost.slug.current}`" class="button-secondary read-more">
        <span>Read More</span> &rarr;
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// move this
.read-more {
  text-decoration: none;
}
</style>
