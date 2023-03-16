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
  console.log(user.value);
  await new Promise((resolve) => {
    setTimeout(resolve, 150);
  });
});
</script>