<template>
    <Navigation v-if="$route.name !== 'index' && $route.name !== 'personal-posts-slug'" />
    <slot />
    <Footer v-if="$route.name !== 'index' && $route.name !== 'personal-posts-slug'" />
</template>
<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

#__nuxt {
    background-color: rgb(2, 10, 2);
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    color: abstracts.$whitish;
}
</style>