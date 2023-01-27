// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // NOTE: adding devicons for marquee on personal/index.vue page
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css",
        },
      ],
    },
  },
  modules: ["@nuxtjs/sanity"],
  sanity: {
    projectId: "g014cs9v",
  },
});
