// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // NOTE: adding devicons for marquee on personal/index.vue page
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
        },
    },
    modules: ["@nuxtjs/sanity"],
    sanity: {
        projectId: "g014cs9v",
    },
    // TESTING:
    ssr: false, //NOTE: this prevents the "window not defined" error that leaflet keeps throwing NEW: will remove this and test the dynamic import
});
