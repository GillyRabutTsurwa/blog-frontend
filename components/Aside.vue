<script setup>
const { data: instaposts } = await useAsyncData("instaposts", () => $fetch("/api/instaposts"));
function randomArray(arr) {
    let newArray = [];
    let numofPosts = 9;

    //NOTE: using while loop for the 1st time in a while
    // whenever the length of the new array is less than the number of posts
    while (newArray.length < numofPosts) {
        // generate a random number
        const randomNumber = Math.round(Math.random() * arr.length - 1);
        // and if that specific value does not already exist in the eventually returned array
        if (!newArray.includes(arr[randomNumber])) {
            // then push that value to that array
            newArray.push(arr[randomNumber]);
        }
    }
    return newArray;
}
const featuredInstaPosts = randomArray(instaposts.value.data);
</script>
<template>
    <aside>
        <div class="picture-category__category">
            <h4 class="picture-category__category--title">Category</h4>
            <ul class="picture-category__category--list">
                <li>
                    <span>Software</span>
                    <span>(05)</span>
                </li>
                <li>
                    <span>Techonology</span>
                    <span>(02)</span>
                </li>
                <li>
                    <span>Lifestyle</span>
                    <span>(07)</span>
                </li>
                <li>
                    <span>Shopping</span>
                    <span>(01)</span>
                </li>
                <li>
                    <span>Food & Leisure</span>
                    <span>(08)</span>
                </li>
            </ul>
        </div>
        <div class="picture-category__category">
            <h4 class="picture-category__category--title">Instagram</h4>
            <div class="instagram-images">
                <figure v-for="currentInsta in featuredInstaPosts">
                    <a :href="currentInsta.permalink" target="_blank" rel="noopener noreferrer">
                        <img :src="currentInsta.media_url" alt="">
                    </a>
                </figure>
            </div>
        </div>
        <div class="picture-category__category">
            <h4 class="picture-category__category--title">NewsLetter</h4>
            <form action="">
                <input type="text" name="" id="" placeholder="E-mail">
                <button type="submit" class="button-secondary" disabled>Subscribe</button>
            </form>
        </div>
    </aside>
</template>


<style lang="scss" scoped>
aside {
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
}

.read-more {

    &,
    &:link,
    &:visited {
        text-decoration: none;
        color: currentColor;
    }
}

.instagram-images {
    display: grid;
    grid-template-columns: repeat(3, 15rem);
    grid-auto-rows: 15rem;

    figure {
        width: 100%;
        height: 100%;

        a,
        img {
            width: inherit;
            height: inherit;
        }

        img {
            object-fit: cover;
            -o-object-fit: cover;
        }
    }
}

form {
    display: flex;
    flex-direction: column;

    input {
        // outline: none;
        // border-radius: none;
        font-size: 1.5rem;
        color: #13113a;
        padding: 0 1.5rem;
        height: 5rem;

        &:focus {
            outline: none;
            border-color: #13113a;
        }
    }
}
</style>