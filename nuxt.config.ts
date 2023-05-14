// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/sanity", "@nuxtjs/supabase"],
    sanity: {
        projectId: "g014cs9v",
    },
    runtimeConfig: {
        instagramAPIKey: process.env.INSTAGRAM_TOKEN,
    },
    app: {
        head: {
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                },
            ],
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
                },
                // NEW: adding fonts
                {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com",
                },
                {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    // @ts-ignore - google fonts has this value as an empty string, but using null shows an error. faites-entrer @ts-ignore
                    crossorigin: null,
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Antonio:wght@500&amp;family=Spartan:wght@400;700&amp;display=swap",
                },
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Antonio:wght@500&amp;family=Spartan:wght@400;700&amp;display=swap",
                },
            ],
            script: [
                {
                    src: "https://kit.fontawesome.com/7a26a17053.js",
                    crossorigin: "anonymous",
                },
            ],
        },
    },
    css: ["@/assets/sass/main.scss"],
});
