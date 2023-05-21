<script setup>
import { usePostsStore } from '@/stores/posts';
const store = usePostsStore();
await store.fetchPosts();


const categories = store.posts.map((currentPost) => currentPost.categories);
const categoriesList = computed(() => {
  return [...new Set(categories.flat())];
});

function getNumOfPostsByCategory(category) {
  return store.posts.filter((currentPost) => currentPost.categories.includes(category)).length;
}

async function testFilter(category) {
  await store.filterPosts(category)
}
</script>

<template>
  <div class="picture-category__category">
    <h4 class="picture-category__category--title">Category</h4>
    <ul class="picture-category__category--list">
      <li v-for="currentCategory in categoriesList" :key="currentCategory" @click="testFilter(currentCategory)">
        <span>{{ currentCategory }}</span>
        <span>({{ getNumOfPostsByCategory(currentCategory) }})</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
