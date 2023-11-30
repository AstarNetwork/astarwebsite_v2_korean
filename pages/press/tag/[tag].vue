<template>
  <NuxtLayout name="default">
    <template #space>
      <SubPageHeader>
        <p class="text-lg sm:text-2xl -mb-2">{{ t("blog.tag") }}:</p>
        <h1
          class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow"
        >
          {{ tag }}
        </h1>
      </SubPageHeader>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12 sm:mb-24">
        <ul
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
          v-if="posts.length > 0"
        >
          <BlogArticleCard v-for="post in posts" :post="post" press />
        </ul>
        <div v-else class="text-center">
          <p class="mb-6">{{ $t("blog.no_articles") }}</p>
          <NuxtLink
            to="/press"
            class="text-space-cyan hover:text-space-cyan-lighter hover:underline"
          >
            {{ $t("blog.back") }}
          </NuxtLink>
        </div>
      </div>

      <!-- <HomeNewsletter class="py-20 sm:py-32" /> -->
    </template>
    <template #earth>
      <Footer />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import gql from "graphql-tag";
const route = useRoute();
const tag = encodeURI(route.params.tag);

const { t } = useI18n();
const astarSpace = 11991;

const query = gql`
query PostsByTag {
    posts(where: { space: { id_eq: "${astarSpace}" }, tagsOriginal_containsInsensitive: "${tag}", hidden_eq: false, AND: {space: { id_eq: "${astarSpace}" }, tagsOriginal_containsInsensitive: "press", hidden_eq: false} }, orderBy: id_DESC) {
      publishedDate: createdOnDay
      title
      href: canonical
      image
      slug
    }
  }
`;

const { data } = await useAsyncQuery({ query, clientId: "subsocial" });
const posts = data.value.posts.map(
  (item: { publishedDate: string | number | Date }) => {
    const lowercaseSlug = item.slug.toLowerCase();
    const date = new Date(item.publishedDate);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return {
      ...item,
      image: item.image
        ? "https://ipfs.subsocial.network/ipfs/" + item.image
        : "/images/blog/placeholder.webp",
      publishedDate: formattedDate,
      slug: lowercaseSlug,
    };
  }
);

import { meta } from "@/data/meta";
const seoTitle = `${tag} | ${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = t("press.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}press.png`;

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
