<script setup>
import { inject } from "vue";
import MovieItem from "../MovieItem/MovieItem.vue";

const { movieList } = inject("MoviesViewtContext");
</script>

<template>
  <div class="flex justify-center">
    <div className="flex flex-wrap gap-4">
      <div v-for="(movie, movieIndex) in movieList" :key="movie.id">
        <MovieItem :key="movieIndex" :movie-index="movieIndex" />
      </div>
    </div>
  </div>
</template>
