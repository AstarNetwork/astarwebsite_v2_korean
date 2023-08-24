<template>
  <NuxtLayout name="default">
    <template #space>
      <SubPageHeader>
        <h1
          class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow"
        >
          Korean LP
        </h1>
        <p class="sm:text-xl lg:text-2xl">description</p>
      </SubPageHeader>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        content
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
