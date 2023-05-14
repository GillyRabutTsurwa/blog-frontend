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
        <a href="#">Home</a>
      </li>
      <li class="navigation__list--item">
        <a href="#">Category</a>
      </li>
      <li class="navigation__list--item">
        <a href="#">Archive</a>
      </li>
      <li class="navigation__list--item">
        <a href="#">Pages</a>
      </li>
      <li class="navigation__list--item">
        <a href="#">Contact Us</a>
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
