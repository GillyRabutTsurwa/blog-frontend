<script setup>
const route = useRoute();
const router = useRouter();
const user = useSupabaseUser(); //NOTE: using to render posts according to user status
const supabase = useSupabaseClient(); //NOTE: using to logout

const isHeaderPlaced = computed(() => {
  return route.fullPath !== "/" && route.name !== "tech" && route.name !== "personal-posts-slug" && route.name !== "authentication" && route.name !== "authours-slug";
});

const logOut = async () => {
  console.log("logout");
  const { error } = await supabase.auth.signOut();
  if (!error) router.go(0); //NOTE: essentially refresh the page. seems to work although found no evidence that it actually does that
}

const goBack = () => (router.back());
</script>

<template>
  <nav v-if="isHeaderPlaced" class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list--item">
        <NuxtLink v-if="!user" to="/authentication">Login</NuxtLink>
        <span v-else @click="logOut">Logout</span>
      </li>
      <li class="navigation__list--item">
        <NuxtLink v-if="!user" to="/authentication">Register</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <a @click="goBack">Back</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  position: absolute;
  top: 3rem;
  right: 5%;

  &__list {
    list-style: none;
    display: flex;

    &--item {
      margin-left: 1rem;

      span {
        cursor: pointer;
      }

      a,
      span {

        &,
        &:link,
        &:visited {
          color: currentColor;
          text-decoration: none;
          font-weight: normal;
        }

        &:hover,
        &:active {
          font-weight: bold;
        }
      }
    }
  }
}
</style>
