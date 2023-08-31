<template>
  <NuxtLayout name="default">
    <template #space>
      <SubPageHeader>
        <h1 class="max-w-5xl -my-6">
          <img
            class="w-full"
            src="/images/page-header.webp"
            alt="Astar Network x Artpia"
            data-not-lazy
          />
          <span class="sr-only">Astar Network x Artpia</span>
        </h1>
      </SubPageHeader>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div class="max-w-3xl mx-auto bg-gray-600 text-white py-60">
          video embed
        </div>
        <Outline />
        <Artists />
        <Marketplaces />
        <Socials />
      </div>
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute();
import { meta } from "@/data/meta";
const { t } = useI18n();
const seoTitle = `${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = "description";
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}common.png`;

useServerSeoMeta({
  title: () => seoTitle,
  description: () => seoDescription,
  ogTitle: () => seoTitle,
  ogDescription: () => seoDescription,
  ogImage: () => seoImage,
  ogImageUrl: () => seoImage,
  ogType: () => "website",
  ogUrl: () => seoUrl,
  twitterCard: () => "summary_large_image",
  twitterTitle: () => seoTitle,
  twitterDescription: () => seoDescription,
  twitterImage: () => seoImage,
});

definePageMeta({
  layout: false,
});
</script>

<style lang="postcss" scoped></style>
