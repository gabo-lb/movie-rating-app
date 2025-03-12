<script setup>
import { computed, inject } from "vue";

const { movieList } = inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");

const movieDescription = computed(() => {
  const { description } = movieList.value[movieIndex] ?? {};
  return description || "";
});
</script>
<template>
  <div className="text-sm">{{ movieDescription }}</div>
</template>
