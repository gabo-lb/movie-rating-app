<script setup>
import { inject } from "vue";

const { movieList } = inject("MoviesViewtContext");
const { movieIndex } = inject("MovieItemContext");

const { name: movieName } = movieList.value[movieIndex];
</script>

<template>
  <div className="text-xl font-bold whitespace-nowrap">{{ movieName }}</div>
</template>
