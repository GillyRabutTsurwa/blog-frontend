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

const isDropDownHovered = ref(false);

const goBack = () => (router.back());
</script>

<template>
  <nav v-if="isHeaderPlaced" class="navigation">
    <ul class="navigation__list">
      <li class="navigation__list--item">
        <NuxtLink v-if="!user" to="/authentication">Login</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink v-if="!user" to="/authentication">Register</NuxtLink>
      </li>
      <li class="navigation__list--item" v-if="route.name !== 'personal'">
        <a @click="goBack">Back</a>
      </li>
      <li class="navigation__list--item">
        <span @mouseover="isDropDownHovered = true" v-if="user" class="account-name">
          <span>{{ user.email }}</span>
          <a v-if="isDropDownHovered" @click="logOut" @mouseleave="isDropDownHovered = false">Logout</a>
        </span>
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

      a,
      span {
        cursor: pointer;
      }

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

      .account-name {
        position: relative;

        a {
          position: absolute;
          top: 2rem;
          right: 8rem;
        }
      }
    }
  }
}
</style>
