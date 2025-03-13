<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";

const { movieRating, isFilledStar, starSize } = defineProps({
  movieRating: { type: Number, default: null },
  isFilledStar: { type: Boolean, default: false },
  isShowInnerRateNumber: { type: Boolean, default: false },
  starSize: { type: Number, default: 1 },
});
</script>
<template>
  <div class="relative">
    <StarIcon
      :class="[
        { 'text-yellow-500': isFilledStar },
        { 'text-gray-500': !isFilledStar },
      ]"
      :style="{ width: `${starSize}rem` }"
    />

    <div
      v-if="isShowInnerRateNumber"
      class="absolute inset-0 flex items-center justify-center text-gray-800"
      :style="{ fontSize: `${starSize / 3}rem` }"
    >
      {{ movieRating || "-" }}
    </div>
  </div>
</template>
