<script setup>
import { inject } from "vue";

const { movieList } = inject("MovieListContext");
const { movieIndex } = inject("MovieItemContext");
const { description: movieDescription } = movieList.value[movieIndex];
</script>
<template>
  <div className="text-sm">{{ movieDescription }}</div>
</template>
