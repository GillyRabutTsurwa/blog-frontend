export default defineNuxtRouteMiddleware((to) => {
    const user = useSupabaseUser();
    console.log(user.value);
    console.log(to.name);

    //IMPORTANT: le mot-clé return est obligatoire selon les documentation
    //NOTE: got to this solution thanks to LearnVue's Nuxt/Supabase YouTube video & the Nuxt middleware docs
    if (process.server) {
        if (to.name === "uncensored") {
            //NOTE: using ternary instead of if else, again return keyword necessary
            return !user.value ? navigateTo("/authentication") : navigateTo("/uncensored");
        }
    }
});
