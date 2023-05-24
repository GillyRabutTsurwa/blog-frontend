<script setup>
const route = useRoute();
const router = useRouter();
const user = useSupabaseUser(); //NOTE: using to render posts according to user status
const supabase = useSupabaseAuthClient(); //NOTE: using to logout

const isHeaderPlaced = computed(() => {
  return route.fullPath !== "/" && route.name !== "tech" && route.name !== "personal-posts-slug" && route.name !== "authentication" && route.name !== "authours-slug";
});

const logOut = async () => {
  const { error } = await supabase.auth.signOut();
  navigateTo("/authentication");
}

const isDropDownHovered = ref(false);

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
        <NuxtLink :to="`/${$route.name === 'tech' ? 'personal' : 'tech'}`">{{ $route.name === 'tech' ? 'Personal' : 'Tech'
        }} Page</NuxtLink>
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
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
// @use "@/assets/sass/components/navigation";
</style>
