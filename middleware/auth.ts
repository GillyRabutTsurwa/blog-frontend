export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();

    //IMPORTANT: le mot-clé return est obligatoire selon les documentation
    //NOTE: got to this solution thanks to LearnVue's Nuxt/Supabase YouTube video & the Nuxt middleware docs

    if (!user.value && to.name === "personal-posts" && to.query.type) {
        return navigateTo("/authentication");
    }
});
