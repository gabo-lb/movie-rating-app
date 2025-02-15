<script setup>
import { ref } from "vue";
import { items } from "../../movies.json";
import MovieItem from "../MovieItem/MovieItem.vue";

const movieList = ref(items);
</script>

<template>
  <div v-for="movie in movieList" :key="movie.id">
    <MovieItem :movie-data="movie" />
  </div>
</template>
