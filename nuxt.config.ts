// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
  ],
  schemaOrg: {
    host: "https://kr.astar.network",
  },
  i18n: {
    baseUrl: "https://kr.astar.network",
    locales: [
      {
        code: "kr",
        name: "Korean",
        iso: "ko-KR",
        files: [
          "kr.json",
        ],
      },
    ],
    langDir: "lang",
    defaultLocale: "kr",
    strategy: "prefix_except_default",
  },
  plugins: [{ src: "~/plugins/aos" }],
  sitemap: {
    siteUrl: "https://kr.astar.network",
    discoverImages: false,
  },
});
