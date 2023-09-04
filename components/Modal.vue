<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="handleClick">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-80 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center text-center sm:items-center"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden sm:rounded-3xl bg-space-gray-dark text-left shadow-xl transition-all sm:w-full sm:max-w-5xl px-6 py-12 sm:p-12"
            >
              <div class="flex flex-col sm:flex-row">
                <div class="shrink-0 sm:max-w-[360px] mx-auto">
                  <img
                    class="w-full object-cover rounded-sm mb-8"
                    :src="
                      artist.image
                        ? '/images/artists/' + artist.image
                        : '/images/artists/artist-placeholder.svg'
                    "
                    :alt="artist.name"
                  />
                  <h3
                    class="text-2xl font-medium sm:mt-4 text-white leading-snug mb-4"
                  >
                    {{ artist.name }}
                  </h3>
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
                </div>

                <div class="sm:pl-6 lg:px-12 flex-1 mt-10 sm:mt-0">
                  <p
                    class="mb-6 sm:text-lg text-white font-semibold"
                    v-if="artist.introduction"
                  >
                    {{ artist.introduction }}
                  </p>
                  <p v-if="artist.interview">{{ artist.interview }}</p>
                </div>
              </div>

              <div class="mt-12" v-if="artist.works.length > 0">
                <div class="flex items-center mb-4">
                  <h2 class="gradient-text font-bold text-2xl">
                    <span>Works</span>
                  </h2>
                  <span class="space-gradient h-0.5 block grow ml-4" />
                </div>
                <div class="space-y-12">
                  <div v-for="work in artist.works">
                    <NuxtLink
                      :to="work.href ? work.href : ''"
                      target="_blank"
                      :class="
                        work.href
                          ? 'text-space-cyan hover:underline hover:text-space-cyan-lighter'
                          : ''
                      "
                    >
                      <img
                        v-if="work.image"
                        class="w-full max-w-[360px]"
                        :src="work.image"
                        :alt="work.text"
                      />
                      <p class="mt-2" v-if="work.text">{{ work.text }}</p>
                    </NuxtLink>
                  </div>
                </div>
              </div>

              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="absolute right-0 sm:right-2 top-0 sm:top-2 text-gray-400 hover:bg-space-gray-lighter p-2 sm:p-4 rounded-full transition"
                  @click="handleClick"
                >
                  <XMarkIcon class="w-8 h-8" />
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { XMarkIcon, GlobeAltIcon } from "@heroicons/vue/24/outline";
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

defineProps({
  artist: {},
  open: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close"]);

const handleClick = () => {
  emit("close");
};
</script>

<style lang="postcss"></style>
