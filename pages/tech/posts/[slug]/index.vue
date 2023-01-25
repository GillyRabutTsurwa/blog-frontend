<template>
  <article class="blog-container">
    <div class="blog-img-container">
      <SanityImage :asset-id="imgURL.asset._ref" auto="format" />
    </div>

    <div class="blog-content">
      <h1 class="blog-content__title">{{title}}</h1>
      <h3 class="blog-content__date-published"><span>Date Published: </span>{{formatDate(_createdAt) || formatDate(publishedAt) }}</h3>
      <div class="blog-content__description">
        <SanityContent :blocks="body" />
      </div>
    </div>
  </article>
</template>
      
    <script setup>
const route = useRoute();
const url = route.params.slug;
console.log(url);

const state = reactive({
  post: {},
});

const query = `*[_type == "tech-post" && slug.current == "${url}"]`;
const { data, error } = await useSanityQuery(query);
state.post = data.value[0];
console.log(state.post);

/**
 * TODO: add this code to a new AuthorInfo component to query for author info based on author of each post
 * const query = `*[_type == "tech-post" && slug.current == "${url}"] {
 *      author->
 * }`;
 * const { data, error } = await useSanityQuery(authorQuery);
 * console.log(data, data.value);
 */

const { title, body, mainImage: imgURL, _createdAt, publishedAt } = state.post;
console.log(imgURL);

//TODO: put this into a composable. as I'm using it elsewhere
const formatDate = (currentDate) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(currentDate).toLocaleDateString("en-GB", options);
};
</script>
      
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
  /* TESTING */
  padding-bottom: 7.5rem;
  overflow: hidden scroll;
}

.blog-content__title {
  font-weight: bolder;
  font-size: 5rem;
  margin: 4.5rem 0 1rem 0;
}

.blog-content__date-published {
  font-style: italic;
  color: #888;
  font-weight: normal;
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