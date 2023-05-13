<script setup>

</script>
<template>
    <div class="test">

        <section class="picture-category">
            <div class="picture-category__caption blog">
                <div class="picture-category__picture">
                    <img src="@/assets/img/Blog-post/blog1.png" alt="">
                </div>
                <h3 class="picture-category__caption--title">Women are getting more involved in hiking, biking and
                    loving the outdoors thanks to photography</h3>
                <p class="picture-category__caption--paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Et eos, quis mollitia nostrum facere
                    doloremque voluptate asperiores ad aliquam at molestiae modi unde quisquam obcaecati sit harum quod
                    dolor sint consequatur deleniti architecto ut laboriosam. Unde cupiditate fuga fugit saepe!</p>
                <button class="button-secondary">
                    <span>Read More</span> &rarr;</button>
            </div>
            <div class="picture-category__caption blog">
                <div class="picture-category__picture">
                    <img src="@/assets/img/Blog-post/blog1.png" alt="">
                </div>
                <h3 class="picture-category__caption--title">Women are getting more involved in hiking, biking and
                    loving the outdoors thanks to photography</h3>
                <p class="picture-category__caption--paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Et eos, quis mollitia nostrum facere
                    doloremque voluptate asperiores ad aliquam at molestiae modi unde quisquam obcaecati sit harum quod
                    dolor sint consequatur deleniti architecto ut laboriosam. Unde cupiditate fuga fugit saepe!</p>
                <button class="button-secondary">
                    <span>Read More</span> &rarr;</button>
            </div>
            <div class="picture-category__caption blog">
                <div class="picture-category__picture">
                    <img src="@/assets/img/Blog-post/blog1.png" alt="">
                </div>
                <h3 class="picture-category__caption--title">Women are getting more involved in hiking, biking and
                    loving the outdoors thanks to photography</h3>
                <p class="picture-category__caption--paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Et eos, quis mollitia nostrum facere
                    doloremque voluptate asperiores ad aliquam at molestiae modi unde quisquam obcaecati sit harum quod
                    dolor sint consequatur deleniti architecto ut laboriosam. Unde cupiditate fuga fugit saepe!</p>
                <button class="button-secondary">
                    <span>Read More</span> &rarr;</button>
            </div>
            <div class="picture-category__caption blog">
                <div class="picture-category__picture">
                    <img src="@/assets/img/Blog-post/blog1.png" alt="">
                </div>
                <h3 class="picture-category__caption--title">Women are getting more involved in hiking, biking and
                    loving the outdoors thanks to photography</h3>
                <p class="picture-category__caption--paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Et eos, quis mollitia nostrum facere
                    doloremque voluptate asperiores ad aliquam at molestiae modi unde quisquam obcaecati sit harum quod
                    dolor sint consequatur deleniti architecto ut laboriosam. Unde cupiditate fuga fugit saepe!</p>
                <button class="button-secondary">
                    <span>Read More</span> &rarr;</button>
            </div>
        </section>
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
                    <figure><img src="@/assets/img/instagram/thumb-card3.png" alt=""></figure>
                    <figure><img src="@/assets/img/instagram/thumb-card4.png" alt=""></figure>
                    <figure><img src="@/assets/img/instagram/thumb-card5.png" alt=""></figure>
                    <figure><img src="@/assets/img/instagram/thumb-card6.png" alt=""></figure>
                    <figure><img src="@/assets/img/instagram/thumb-card7.png" alt=""></figure>
                    <figure><img src="@/assets/img/instagram/thumb-card8.png" alt=""></figure>
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
    </div>
</template>


<style lang="scss" scoped>
.test {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

aside {
    display: flex;
    flex-direction: column;
    margin: 3rem 0;
}

.instagram-images {
    display: grid;
    grid-template-columns: repeat(3, 15rem);
    grid-auto-rows: 15rem;

    figure {
        width: 100%;
        height: 100%;

        img {
            width: inherit;
            height: inherit;
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