<script setup>
import { inject, ref, watchEffect } from "vue";

const { movieList } = inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");

const movieDescription = ref("");

watchEffect(() => {
  const { description } = movieList.value[movieIndex] ?? {};
  movieDescription.value = description || "";
});
</script>
<template>
  <div className="text-sm">{{ movieDescription }}</div>
</template>
