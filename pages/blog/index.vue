<template>
  <NuxtLayout name="default">
    <template #space>
      <SubPageHeader>
        <h1
          class="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight drop-shadow"
        >
          {{ t("blog.title") }}
        </h1>
        <p class="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
          {{ t("blog.description") }}
        </p>
      </SubPageHeader>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 mb-12 sm:mb-24">
        <h2
          class="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 sm:mb-12"
        >
          {{ t("blog.latest") }}
        </h2>
        <ul
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          <BlogArticleCard v-for="post in posts" :post="post" />
        </ul>
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

const astarSpace = 11991;
const query = gql`
  query PostsBySpaceId {
    posts(where: { space: { id_eq: "${astarSpace}" }, tagsOriginal_containsInsensitive: "blog", hidden_eq: false }, orderBy: id_DESC) {
      publishedDate: createdOnDay
      title
      href: canonical
      image
      slug
      id
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

const { t } = useI18n();

const route = useRoute();
import { meta } from "@/data/meta";
const seoTitle = `${t("blog.title")} | ${meta.siteName} - ${t("meta.tagline")}`;
const seoDescription = t("blog.description");
const seoUrl = `${meta.url}${route.fullPath}`;
const seoImage = `${meta.image}blog.png`;

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
