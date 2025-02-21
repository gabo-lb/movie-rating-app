<script setup>
import { inject, ref, watchEffect } from "vue";

const { movieList } = inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");

const movieName = ref("");

watchEffect(() => {
  const { name } = movieList?.value[movieIndex] ?? {};
  movieName.value = name || "";
});
</script>

<template>
  <div className="text-xl font-bold whitespace-nowrap">{{ movieName }}</div>
</template>
