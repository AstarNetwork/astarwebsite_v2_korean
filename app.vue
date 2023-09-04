<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { meta } from "@/data/meta";
useHead(() => ({
  htmlAttrs: { lang: "ko" },
  link: [
    {
      rel: "canonical",
      href: meta.url,
    },
  ],
}));

useSchemaOrg([
  defineOrganization({
    name: "Astar Foundation",
    logo: "/logo.png",
  }),
  defineWebSite(),
  defineWebPage(),
]);
</script>
