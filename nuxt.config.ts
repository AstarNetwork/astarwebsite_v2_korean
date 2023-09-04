// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
  ],
  schemaOrg: {
    host: "https://ko.astar.network",
  },
  i18n: {
    baseUrl: "https://ko.astar.network",
    locales: [
      {
        code: "ko",
        name: "Korean",
        iso: "ko-KR",
        files: [
          "ko.json",
        ],
      },
    ],
    langDir: "lang",
    defaultLocale: "ko",
    strategy: "prefix_except_default",
  },
  plugins: [{ src: "~/plugins/aos" }],
  sitemap: {
    siteUrl: "https://ko.astar.network",
    discoverImages: false,
  },
});
