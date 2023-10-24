<template>
  <div class="py-10 sm:py-20">
    <h2 class="title text-center mb-12 sm:mb-16">
      <span>NFT Marketplaces</span>
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
      <NuxtLink v-for="banner in banners" :to="banner.href" target="_blank">
        <img
          class="w-full hover:brightness-110"
          :src="'/images/' + banner.image"
          :alt="banner.title"
        />
        <span class="sr-only">{{ banner.title }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const banners = [
  {
    title: "Weple NFT Marketplace",
    image: "banner-weple.webp",
    href: "https://new.weple.io/",
  },
  {
    title: "tofuNFT",
    image: "banner-tofunft.webp",
    href: "https://tofunft.com/astar",
  },
];
</script>
