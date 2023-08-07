<script setup>
const { status, signIn, signOut } = useAuth();
const router = useRouter();
const logOut = async () => {
  console.log("Logout Settings");
}
const isLoggedIn = computed(() => status.value === "authenticated");



const goBack = () => (router.back());
</script>

<template>
  <nav class="navigation">
    <Logo />
    <ul class="navigation__list">
      <li class="navigation__list--item">
        <NuxtLink to="/personal/posts">Blogs</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/authours/gilbert-rabut-tsurwa">About Me</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink :to="`/${$route.name === 'tech' ? 'personal' : 'tech'}`">
          {{ $route.name === 'tech' ? 'Personal' : 'Tech' }} Page
        </NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/uncensored">Uncensored Posts</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <a href="https://gilbertrabuttsurwa.tech" target="_blank" rel="noreferrer noopener">Portfolio Site</a>
      </li>
      <li class="navigation__list--item">
        <a href="https://gilbertrabuttsurwa-shop.netlify.app" target="_blank" rel="noreferrer noopener">Shop</a>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/contact">Contact Me</NuxtLink>
      </li>
    </ul>
    <ul class="navigation__icons">
      <li class="navigation__icons--icon">
        <a href="https://www.facebook.com/rabuttsurwa" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li class="navigation__icons--icon">
        <a href="https://www.instagram.com/rabuttsurwa96" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li class="navigation__icons--icon">
        <a href="https://www.instagram.com/rabuttsurwa96" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li class="navigation__icons--icon">
        <a href="https://open.spotify.com/user/tsurwagilly" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-spotify"></i>
        </a>
      </li>
      <li class="navigation__icons--icon">
        <a href="https://www.linkedin.com/in/gilberttsurwa" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin"></i>
        </a>
      </li>
      <li v-if="isLoggedIn">
        <span @click="signOut" style="color: #fefefe;">Sign Out</span>
      </li>
      <li v-else>
        <span @click="signIn" style="color: #fefefe;">Sign In</span>
      </li>

    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "~/assets/sass/abstracts/" as abstracts;

.navigation {
  @extend %flex-basic;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #f0f0f0;
  padding: 0 1.75rem;
  background-color: abstracts.$colour-primary;

  @include abstracts.breakpoint(480) {
    height: 17.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &>*:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  .logo {
    font-size: 2.5rem;
    font-weight: 500;
    color: abstracts.$text-grey-light;
    // font-family: abstracts.$Josefin;
    letter-spacing: 1.5px;
  }

  &__list,
  &__icons {
    list-style: none;
    @extend %flex-basic;
  }

  &__list {
    font-family: "Abel", cursive;
    font-size: 1.6rem;

    &--item {
      margin-right: 3.25rem;

      a {

        &,
        &:link,
        &:visited {
          font-size: 1.75rem;
          text-decoration: none;
          color: abstracts.$whitish;
        }

        &:hover,
        &:active {
          font-weight: bold;
        }
      }
    }
  }

  &__icons {
    font-size: 1.6rem;

    &--icon {
      margin-right: 2rem;

      a {

        &:link,
        &:visited {
          text-decoration: none;
          color: abstracts.$whitish;
        }
      }
    }
  }
}
</style>
