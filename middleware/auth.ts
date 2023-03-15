export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();
    console.log(user.value);
    console.log(to.name);

    /**
     * okay, it seems the issue had to do with the middleware running with the server
     * i therefore removed the if checker to look for environment type: if (process.server)
     * and verified my code using this very nice article: https://rafamed.dev/blog/how-to-setup-authentication-with-nuxt-3-supabase-and-tailwind-css/#source
     * it seems that the way this code below is written is very important
     * i wrote it the exact same way that I saw in LearnVue's tutorial. I still do not understand why it works this way...
     * ... i say this because I was getting a redirect loop error initially, but it seems to be working now
     */
    if (!user.value && to.name === "uncensored") {
        return navigateTo("/authentication");
    } else if (user.value && to.name === "authentication") {
        return navigateTo("/personal");
    }
});
