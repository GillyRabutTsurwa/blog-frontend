<template>
  <Logo />
  <DevOnly>
    <Navigation />
  </DevOnly>
  <slot />
</template>

<script setup>
const router = useRouter();
const user = useSupabaseUser();

router.beforeEach(async () => {
  console.clear();
  console.log("SUPERBASE");
  const timer = setInterval(() => {
    if (user && user.id) {
      clearInterval(timer);
    }
  }, 100);
});
</script>