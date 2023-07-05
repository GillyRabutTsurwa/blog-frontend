<script setup>
import { usePostsStore } from '@/stores/posts';
const store = usePostsStore();
store.fetchTechPosts();

const props = defineProps({
    posts: {
        type: Array,
        required: true
    }
});

const snippetLength = computed(() => {
    return showElement.value ? 300 : 400;
});

const { formatDate } = useFormatDate();
const { showElement, toggleElementOnResize } = useBreakpoints();


function getSnippet(blockContent) {
    const body = blockContent
        .filter(block => block._type === "block")
        .map(block => block.children.map(child => child.text).join(""))
        .join('')
    return body.slice(0, snippetLength.value) + "...";
}

if (process.client) {
    window.addEventListener("resize", () => {
        toggleElementOnResize(480);
    })
};

onMounted(() => {
    if (process.client) {
        toggleElementOnResize(480);
    }
});
</script>

<template>
    <h2>Posts</h2>
    <section class="picture-category">
        <div v-for="(currentPost, index) in store.techPosts" :key="currentPost._id" class="picture-category__caption blog">
            <div class="picture-category__picture">
                <SanityImage :asset-id="currentPost.thumbnail.asset._ref" auto="format" />
            </div>
            <h3 class="picture-category__caption--title">{{ currentPost.title }}</h3>
            <h5 style="font-weight: 500;">{{ formatDate(currentPost.publishedAt) }}</h5>
            <div class="picture-category__caption--paragraph">
                <p>{{ getSnippet(currentPost.body) }}</p>
            </div>
            <Button isLink :path="`/tech/posts/${currentPost.slug.current}`" colourPrimary="#104f55"
                colourSecondary="#f0f0f0" />
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "@/assets/sass/abstracts/" as abstracts;

h2 {
    position: relative;
    margin-top: 4rem;
    font-size: 4rem;
    left: 46%;
    bottom: 5rem;

    @include abstracts.breakpoint(480) {
        left: 37.5%;
    }
}

.picture-category {
    margin: 3rem 0;
    padding: 5rem;

    display: grid;
    grid-template-columns: repeat(2, 55rem);
    // grid-template-columns: 1fr; will be great for responsiveness
    -moz-gap: 7rem;
    gap: 7rem;
    grid-template-rows: repeat(2, -webkit-min-content);
    grid-template-rows: repeat(2, min-content);

    @include abstracts.breakpoint(1023) {
        grid-template-columns: 1fr;
        width: 80%;
        margin: 0 auto;
    }

    &.second {
        grid-template-rows: 54rem -webkit-min-content;
        grid-template-rows: 54rem min-content;
    }

    &__picture {
        // WORKS....
        -o-object-fit: cover;
        object-fit: cover;

        img {
            // LIKE GOD!
            width: 100%;
            height: 100%;
        }
    }

    &__category {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 4rem;
        width: 100%; //TESTING

        &--title {
            align-self: center;
        }

        &--list {
            list-style-type: none;
            width: 70%;
            margin-top: 1.5rem;

            li {
                margin-bottom: 2rem;
                background-color: abstracts.$colour-primary;
                color: abstracts.$whitish;
                font-weight: bold;
                padding: 1.1rem 1.5rem;
                border-radius: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                cursor: pointer;
            }
        }
    }

    &__caption {
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        // // align-items: flex-start;
        // align-items: flex-start;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 35rem repeat(4, -webkit-min-content);
        grid-template-rows: 35rem repeat(4, min-content);
        -moz-row-gap: 1.25rem;
        row-gap: 1.25rem;
        justify-items: start;

        @include abstracts.breakpoint(480) {
            grid-template-rows: 20rem repeat(4, -webkit-min-content);
            grid-template-rows: 20rem repeat(4, min-content);
        }

        &--paragraph {
            margin-bottom: 0;
        }
    }

    &__popular-post {
        display: grid;
        // grid-template-rows: -webkit-min-content 5rem -webkit-min-content;
        // grid-template-rows: -webkit-min-content 50rem -webkit-min-content;
        grid-template-rows: -webkit-min-content 20rem -webkit-min-content;
        grid-template-rows: min-content 20rem min-content;

        &--thumbnail {
            -o-object-fit: cover;
            object-fit: cover;

            img {
                width: 100%;
                height: 100%;
            }
        }

        &--paragraph {
            font-size: 1.4rem;
        }
    }
}
</style>