<script setup>
import { computed } from "vue";

const { movieData } = defineProps({
  movieData: { type: Object, default: null },
});

const movieGenres = computed(() => {
  const { genres } = movieData ?? {};
  return genres || "";
});
</script>
<template>
  <div class="flex gap-1 mb-3">
    <div
      v-for="genre in movieGenres"
      :key="genre"
      class="bg-indigo-600 rounded-3xl"
    >
      <div class="text-slate-100 text-sm px-1">
        {{ genre }}
      </div>
    </div>
  </div>
</template>
