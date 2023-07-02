// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/sanity", "@nuxtjs/supabase", "@pinia/nuxt"],
    runtimeConfig: {
        sanityProjectID: process.env.VITE_SANITY_PROJECT_ID,
        instagramAPIKey: process.env.INSTAGRAM_TOKEN,
        // NOTE: ok. it seems both pieces of code do the same thing
        // so i can have the sanity config code here...
        // ... or below where I have commented it out
        // tested it multiple times.
        // if i comment both of them out, they break (test)
        // i will decide which piece i want to keep
        // will keep the one that is more comprehensive to me
        public: {
            sanity: {
                projectId: process.env.VITE_SANITY_PROJECT_ID,
                dataset: process.env.VITE_SANITY_ENV_STAGE,
                apiVersion: process.env.VITE_SANITY_API_VERSION,
                useCdn: false,
            },
        },
    },
    // NOTE: wait, i don't need this if it's specified above?
    // sanity: {
    //     projectId: process.env.VITE_SANITY_PROJECT_ID,
    //     dataset: process.env.VITE_SANITY_ENV,
    //     apiVersion: process.env.VITE_SANITY_API_VERSION,
    //     useCdn: false,
    // },
    app: {
        head: {
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                },
                /**
                 * NEW: attempt to add featured image on LinkedIn
                 * thanks to this link: https://medium.com/@jamesyhiggs/how-to-add-thumbnail-images-to-the-featured-section-of-your-linkedin-profile-for-web-apps-sites-917346235932
      {
                 */
                {
                    name: "description",
                    content:
                        "Welcome to my blog site where I have a personal section and a tech section. I write about a vast array of topics so if that interests you, take time to read my posts.",
                },
                {
                    name: "title",
                    property: "og:title",
                    content: "Gilbert's Blog",
                },
                {
                    property: "og:type",
                    content: "Gilbert's Blog",
                },
                {
                    name: "image",
                    property: "og:image",
                    content: "https://live.staticflickr.com/65535/52922380457_af2cf73399_k.jpg",
                },
                {
                    name: "description",
                    property: "og:description",
                    content: "Gilbert's Blog",
                },
                {
                    name: "author",
                    content: "Gilbert Rabut Tsurwa",
                },
                // ============================================================================================================
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
                    href: "https://fonts.googleapis.com/css2?family=Abel&family=League+Spartan:wght@300;400;600;700&family=Lexend+Deca:wght@100;300;400;500&display=swap",
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
