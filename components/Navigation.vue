<script setup>
const route = useRoute();
const router = useRouter();
const user = useSupabaseUser(); //NOTE: using to render posts according to user status
console.log(user.value);
const supabase = useSupabaseAuthClient(); //NOTE: using to logout

const isHeaderPlaced = computed(() => {
  return route.fullPath !== "/" && route.name !== "tech" && route.name !== "personal-posts-slug" && route.name !== "authentication" && route.name !== "authours-slug";
});

const logOut = async () => {
  console.log("logout");
  const { error } = await supabase.auth.signOut();
  navigateTo("/authentication");
}

const goBack = () => (router.back());
</script>

<template>
  <nav v-if="isHeaderPlaced" class="navigation">
    <ul class="navigation__list">
      <!-- <li class="navigation__list--item"><NuxtLink v-if="!user" to="/authentication">Login</NuxtLink><a v-else @click="logOut">Logout</a></li>-->
      <!-- <li class="navigation__list--item"><NuxtLink v-if="!user" to="/authentication">Register</NuxtLink></li> -->
      <li class="navigation__list--item">
        <a @click="goBack">Back</a>
      </li>
      <!--<li class="navigation__list--item"><span v-if="user">{{ user.email }}</span></li> -->
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
        font-weight: bolder;
      }

      a {

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
