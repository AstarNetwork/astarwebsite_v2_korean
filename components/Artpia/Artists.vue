<template>
  <div class="py-10 sm:py-20">
    <h2 class="title text-center mb-12 sm:mb-16">
      <span>Content Creators</span>
    </h2>
    <ul
      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 sm:gap-x-12 gap-y-12"
    >
      <li v-for="(artist, index) in artists">
        <div class="group cursor-pointer" @click="modalAction(index)">
          <img
            class="w-full object-cover rounded-sm shadow-lg group-hover:brightness-110 transition"
            :src="
              artist.image
                ? '/images/artists/' + artist.image
                : '/images/artists/artist-placeholder.svg'
            "
            :alt="artist.name"
          />
          <h3
            class="text-white mt-2 sm:mt-4 mb-2 font-medium sm:text-lg group-hover:text-space-cyan"
          >
            {{ artist.name }}
          </h3>
        </div>
        <div class="flex items-center space-x-3">
          <NuxtLink
            :to="artist.links.instagram"
            v-if="artist.links.instagram"
            target="_blank"
          >
            <IconInstagram class="icon-link" />
          </NuxtLink>
          <NuxtLink
            :to="artist.links.twitter"
            v-if="artist.links.twitter"
            target="_blank"
          >
            <IconTwitter class="icon-link" />
          </NuxtLink>
          <NuxtLink
            :to="artist.links.youtube"
            v-if="artist.links.youtube"
            target="_blank"
          >
            <IconYoutube class="icon-link" />
          </NuxtLink>
          <NuxtLink
            :to="artist.links.opensea"
            v-if="artist.links.opensea"
            target="_blank"
          >
            <IconOpensea class="icon-link" />
          </NuxtLink>
          <NuxtLink
            :to="artist.links.discord"
            v-if="artist.links.discord"
            target="_blank"
          >
            <IconDiscord class="icon-link" />
          </NuxtLink>
        </div>
      </li>
    </ul>
  </div>

  <Modal :artist="artists[artistIndex]" :open="open" @close="modalClose" />
</template>

<script setup lang="ts">
import { artists } from "@/data/artists";

const open = ref(false);
const artistIndex = ref(0);

const modalAction = (index: number) => {
  artistIndex.value = index;
  open.value = true;
};

const modalClose = () => {
  open.value = false;
};
</script>

<style lang="postcss">
.icon-link {
  @apply w-5 sm:w-6 h-5 sm:h-6 hover:text-space-cyan;
}
</style>
