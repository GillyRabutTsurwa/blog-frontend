<script setup>
const props = defineProps({
  postData: {
    type: Object,
    required: true
  }
});
const { title, body, author, mainImage: imgURL, _createdAt, _updatedAt } = props.postData;
const { formatDate } = useFormatDate();

/** NOTE:
 * you can also import the component manually, but with this is cleaner Nuxt solution
 * if I was using plain Vue, I would have imported it instead
 * more on resolveComponent helper function here: https://vuejs.org/api/render-function.html#resolvecomponent
 */
const CustomText = resolveComponent("CustomText");
const serializers = {
  types: {
    text: CustomText
  }
}
console.log(serializers)
</script>

<template>
  <article class="blog-container">
    <div class="blog-img-container">
      <SanityImage :asset-id="imgURL.asset._ref" auto="format" />
    </div>

    <div class="blog-content">
      <h1 class="blog-content__title">{{ title }}</h1>
      <h3 class="blog-content__author">
        <span>By: </span>
        <NuxtLink :to="`/authours/${author.slug.current}`">
          <span>{{ author.name }}</span>
        </NuxtLink>
      </h3>
      <h3 class="blog-content__date-published">
        <span>Date Published: </span>
        <span>{{ formatDate(_updatedAt) || formatDate(_createdAt) }}</span>
      </h3>
      <div class="blog-content__description">
        <SanityContent :blocks="body" :serializers="serializers" />
      </div>
    </div>
  </article>
</template>

<style>
.blog-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  height: 100vh;
}

.blog-img-container,
.blog-content {
  height: 100%;
}

.blog-img-container {
  position: sticky;
  top: 0;
  height: 100vh;
  overflow: hidden;
}

.blog-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-content {
  position: relative;
  padding: 0 3rem 2rem 3rem;
  overflow: hidden scroll;
}

.blog-content__title {
  font-weight: bolder;
  font-size: 5rem;
  margin: 4.5rem 0 1rem 0;
}

.blog-content__author,
.blog-content__date-published {
  font-style: italic;
  color: #888;
  font-weight: normal;
}

.blog-content__author a,
.blog-content__author a:link,
.blog-content__author a:visited {
  color: currentColor;
  text-decoration: underline;
}

.blog-content__description {
  font-size: 1.75rem;
  margin: 3rem 0;
  line-height: 1.5;
}

.blog-content__date {
  font-weight: bold;
  font-style: italic;
}

.blog-content__navigation {
  width: 50rem;
  margin: 0 auto;
}

.blog-content__navigation--title {
  text-align: center;
  font-weight: bold;
}

.blog-content__navigation--toc {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.blog-content__navigation--toc li {
  margin: 0.55rem;
}
</style>