<script setup>
import { computed } from "vue";

const { movieData } = defineProps({
  movieData: { type: Object, default: null },
});

const movieName = computed(() => {
  const { name } = movieData ?? {};
  return name || "";
});
</script>

<template>
  <div className="text-xl font-bold whitespace-nowrap">{{ movieName }}</div>
</template>
