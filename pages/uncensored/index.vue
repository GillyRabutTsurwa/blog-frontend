<script setup>
definePageMeta({
    middleware: ["auth"]
});
const user = useSupabaseUser();

onMounted(() => {
    watchEffect(() => {
        if (!user.value) {
            navigateTo("/authentication");
        }
    });
});
</script>

<template>
    <div>
        this is the uncensored page
    </div>
</template>


<style lang="scss" scoped></style>