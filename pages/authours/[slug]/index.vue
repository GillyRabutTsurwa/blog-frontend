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

const CustomText = resolveComponent("CustomText");
const serializers = {
    types: {
        text: CustomText
    }
}
console.log(serializers)

const { showElement, toggleElementOnResize } = useBreakpoints();
if (process.client) window.addEventListener("resize", () => (toggleElementOnResize(480)));
onMounted(() => {
    if (process.client) toggleElementOnResize(480);
})

</script>
        
<template>
    <div class="authour">
        <div class="authour__content">
            <h4 class="authour__content--title">{{ name }}</h4>
            <div class="authour__content--text">
                <SanityContent :blocks="bio" :serializers="serializers" />
            </div>
        </div>
        <figure class="authour__img" v-if="!showElement">
            <SanityImage :asset-id="image.asset._ref" auto="format" />
        </figure>
    </div>
</template>


<style lang="scss" scoped>
@use "@/assets/sass/abstracts";

.authour {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;

    @include abstracts.breakpoint(1023) {
        grid-template-columns: 1fr;
        grid-template-rows: min-content 1fr;
    }

    &__content {
        padding: 7rem 3rem 0 3rem;
        margin-bottom: 5rem;

        &--title {
            font-size: 3rem;
            text-align: center;
            margin-bottom: 2rem;
        }
    }

    &__img {
        position: sticky;
        top: 0;
        height: 100vh;
        overflow: hidden;

        @include abstracts.breakpoint(1023) {
            width: 30rem;
            height: 30rem;
            border-radius: 50%;
            margin: 0 auto;
        }

        img {
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
        }

    }
}
</style>