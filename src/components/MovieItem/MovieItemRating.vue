<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";
const { movieRating } = defineProps({
  movieRating: Number,
});
</script>
<template>
  <div className="absolute bottom-3 text-sm">
    <div className="flex">
      <div className="mr-2">Rating: ({{ movieRating }}/5)</div>
      <div
        v-for="start in movieRating"
        :key="start"
        className="size-5 text-yellow-500"
      >
        <StarIcon />
      </div>
    </div>
  </div>
</template>
