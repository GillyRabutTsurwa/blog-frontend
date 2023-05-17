<script setup>
// const { data: instaposts } = await useAsyncData("instaposts", () => $fetch("/api/instaposts"));
const state = reactive({
    posts: [],
    currentPage: 1,
    postsPerPage: 4
});

const query = groq`*[_type == "personal-post"]`;
const { data, error } = await useSanityQuery(query);
state.posts = data.value;

// console.log(instaposts.value);
// instaposts.value.data.forEach((currentPost) => console.log(currentPost.caption));

const indexOfLastPost = computed(() => {
    return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost = computed(() => {
    return indexOfLastPost.value - state.postsPerPage;
});

// this signifies the current posts on the page
const currentPosts = computed(() => {
    return state.posts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});

onUpdated(() => {
    console.log(currentPosts.value);
})

// function randomArray(arr) {
//     let newArray = [];
//     let numofPosts = 9;

//     //NOTE: using while loop for the 1st time in a while
//     // whenever the length of the new array is less than the number of posts
//     while (newArray.length < numofPosts) {
//         // generate a random number
//         const randomNumber = Math.round(Math.random() * arr.length - 1);
//         // and if that specific value does not already exist in the eventually returned array
//         if (!newArray.includes(arr[randomNumber])) {
//             // then push that value to that array
//             newArray.push(arr[randomNumber]);
//         }
//     }
//     return newArray;
// }

// const featuredInstaPosts = randomArray(instaposts.value.data);

// NEW:
function renderPagination(eventPayload) {
    state.currentPage = eventPayload;
    console.log(eventPayload);
}


</script>
<template>
    <main>
        <PostList :posts="currentPosts" />
        <Pagination :postsPerPage="state.postsPerPage" :postsLength="state.posts.length"
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