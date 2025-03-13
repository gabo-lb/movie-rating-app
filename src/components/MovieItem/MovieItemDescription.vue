<script setup>
import { computed } from "vue";

const { movieData } = defineProps({
  movieData: { type: Object, default: null },
});

const movieDescription = computed(() => {
  const { description } = movieData ?? {};
  return description || "";
});
</script>
<template>
  <div className="text-sm">{{ movieDescription }}</div>
</template>
