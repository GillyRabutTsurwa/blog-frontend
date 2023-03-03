<script setup>
const route = useRoute();
const url = route.params.slug;
const state = reactive({
    authour: {},
});

const query = groq`*[_type == "author" && slug.current == "${url}"]`;
const { data, pending, error } = await useSanityQuery(query);
state.authour = data.value[0];
console.log(state.authour);

const { name, bio, image } = state.authour;

</script>
        
<template>
    <div class="authour">
        <div class="about__content">
            <h4>{{ name }}</h4>
            <SanityContent :blocks="bio" />
        </div>
        <figure class="authour__img">
            <SanityImage :asset-id="image.asset._ref" auto="format" />
        </figure>
    </div>
</template>


<style lang="scss" scoped>
.authour {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;

    &__img {
        width: 100%;
        height: 100%;
    }
}
</style>