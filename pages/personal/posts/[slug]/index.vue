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

/** NEW:
 * modified query so that i can get all my original post data as before...
 * ... AND the authour data, which is a reference field type.
 * i found out exactly how to do it thanks to this link:
 * https://stackoverflow.com/questions/55428988/how-to-retrieve-a-referenced-field-data-inside-inputcomponent-in-sanity-io
 * we're including what is already in our query data object using the spread operator-like syntaxe "..."
 * and then extracting all the properties of our author reference field with "->"
 * if you do not include the "..." (it's pretty much the spread operator)...
 * ...then the object will only be populated with the author data, without none of the other data
 */
const query = groq`*[_type == "personal-post" && slug.current == "${url}"] {
  ...,
  author->
}`;
const { data, pending, error } = await useSanityQuery(query);
state.post = data.value[0];
console.log(state.post);
/** NOTE:
 * puisque je fais un composant séparé pour un post, ça me sera plus facile pour passer l'objet entier comme un prop
 * donc, je fais plus la destructuration
 * je vais le faire dans le composant lui-même plus tard
 */
// const { title, body, author, mainImage: imgURL, _createdAt } = state.post;
</script>