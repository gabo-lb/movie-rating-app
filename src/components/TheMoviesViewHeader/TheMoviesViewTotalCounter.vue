<script setup>
import { useMovieList } from "../../composables/useMovieList";

const { movieList } = useMovieList();
</script>
<template>
  <div class="text-nowrap mr-6">Total movies: {{ movieList.length }}</div>
</template>
