<script setup>
import { defineProps } from "vue";
import VLazyImage from "v-lazy-image";

const props = defineProps({
  label: String,
  link: String,
  icon: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="flex items-center gap-2 py-4 px-4 transition hover:bg-gray-100 rounded-xl">
    <v-lazy-image :src="icon" :src-placeholder="label" class="w-6" />
    <p class="font-medium">{{ label }}</p>
  </div>
</template>
