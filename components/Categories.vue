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
  <div class="category">
    <h4 class="category__title">Category</h4>
    <ul class="category__list">
      <li v-for="currentCategory in categoriesList" :key="currentCategory" @click="testFilter(currentCategory)">
        <span>{{ currentCategory }}</span>
        <span>({{ getNumOfPostsByCategory(currentCategory) }})</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.category {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 4rem 0;
  width: 100%; //TESTING

  &__title {
    align-self: center;
  }

  &__list {
    list-style-type: none;
    width: 70%;
    margin-top: 1.5rem;

    li {
      margin-bottom: 2rem;
      background-color: abstracts.$colour-primary;
      color: abstracts.$whitish;
      // font-weight: bold;
      padding: 1.1rem 1.5rem;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
