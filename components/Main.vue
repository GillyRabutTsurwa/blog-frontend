<script setup>
import { usePostsStore } from '@/stores/posts';
const state = reactive({
    currentPage: 1,
    postsPerPage: 4
});
const store = usePostsStore();
await store.fetchPosts();


const indexOfLastPost = computed(() => {
    return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost = computed(() => {
    return indexOfLastPost.value - state.postsPerPage;
});

// this signifies the current posts on the page
const currentPosts = computed(() => {
    return store.filteredPosts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});

onUpdated(() => {
    console.log(currentPosts.value);
})

function renderPagination(eventPayload) {
    state.currentPage = eventPayload;
    console.log(eventPayload);
}
</script>
<template>
    <main>
        <PostList :posts="currentPosts" />
        <Pagination :postsPerPage="state.postsPerPage" :postsLength="store.filteredPosts.length"
            @paginate="renderPagination($event)" />
    </main>
</template>


<style lang="scss" scoped>
.test {
    // display: grid;
    // grid-template-columns: repeat(2, 1fr);

    h2 {
        grid-column: 1 / -1;
        justify-self: center;
        transform: translate(-30rem, 3rem);

    }
}

// aside {
//     display: flex;
//     flex-direction: column;
//     margin: 3rem 0;
// }

// .read-more {

//     &,
//     &:link,
//     &:visited {
//         text-decoration: none;
//         color: currentColor;
//     }
// }

// .instagram-images {
//     display: grid;
//     grid-template-columns: repeat(3, 15rem);
//     grid-auto-rows: 15rem;

//     figure {
//         width: 100%;
//         height: 100%;

//         a,
//         img {
//             width: inherit;
//             height: inherit;
//         }

//         img {
//             object-fit: cover;
//             -o-object-fit: cover;
//         }
//     }
// }

// form {
//     display: flex;
//     flex-direction: column;

//     input {
//         // outline: none;
//         // border-radius: none;
//         font-size: 1.5rem;
//         color: #13113a;
//         padding: 0 1.5rem;
//         height: 5rem;

//         &:focus {
//             outline: none;
//             border-color: #13113a;
//         }
//     }
// }
</style>