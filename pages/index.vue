<template>
  <NuxtLayout name="default">
    <template #space>
      <SubPageHeader>
        <h1 class="max-w-5xl -my-6">
          <img
            class="w-full"
            src="/images/page-header.webp"
            alt="Astar Network x ARTPIA"
            data-not-lazy
          />
          <span class="sr-only">Astar Network x ARTPIA</span>
        </h1>
      </SubPageHeader>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="max-w-3xl mx-auto bg-gray-600 text-white py-60 text-center">
          video embed
        </div>
        <ArtpiaOutline />
        <ArtpiaArtists />
        <ArtpiaMarketplaces />
        <ArtpiaSocials />
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
const seoTitle = `Astar Network x ARTPIA | ${meta.siteName} - ${t(
  "meta.tagline"
)}`;
const seoDescription =
  "Astar Network recently partnered with ARTPIA and WEPLE to support the World’s-first Digital Art TV show that premiered in South Korea. Astar supported and followed these content creator’s journey’s and aimed to discover and nurture emerging artists from South Korea who will become the future leaders of next-generation art & NFTs.";
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
