<script setup>
import { computed, inject } from "vue";

const { movieList } = inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");

const movieName = computed(() => {
  const { name } = movieList?.value[movieIndex] ?? {};
  return name || "";
});
</script>

<template>
  <div className="text-xl font-bold whitespace-nowrap">{{ movieName }}</div>
</template>
