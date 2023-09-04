<template>
  <div class="py-20">
    <h2 class="title text-center mb-12 sm:mb-16">
      <span>Stay Informed</span>
    </h2>
    <ul class="max-w-xl mx-auto grid grid-cols-3 gap-2 sm:gap-6">
      <li v-for="link in links">
        <NuxtLink
          :to="link.href"
          target="_blank"
          class="bg-space-gray block rounded-3xl text-center py-6 sm:py-8 px-2 hover:bg-space-gray-lighter transition"
        >
          <component
            :is="link.icon"
            class="h-10 sm:h-12 w-10 sm:w-12 mx-auto my-2 sm:my-4"
            :class="link.color"
            aria-hidden="true"
          />
          <h3 class="font-medium mt-1 sm:mt-2 text-tiny sm:text-base">
            {{ link.name }}
          </h3>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const Twitter = resolveComponent("IconTwitter");
const Discord = resolveComponent("IconDiscord");
const Telegram = resolveComponent("IconTelegram");

const links = [
  {
    name: "Twitter",
    href: "https://twitter.com/astarNetwork",
    icon: Twitter,
    color: "text-[#1DA1F2]",
  },
  {
    name: "Telegram",
    href: "https://t.me/PlasmOfficial",
    icon: Telegram,
    color: "text-[#0088CC]",
  },
  {
    name: "Discord",
    href: "https://discord.gg/astarnetwork",
    icon: Discord,
    color: "text-[#5865F2]",
  },
];
</script>
