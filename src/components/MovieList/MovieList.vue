<script setup>
import { ref } from "vue";
import { items } from "../../movies.json";
import MovieItem from "../MovieItem/MovieItem.vue";

const movieList = ref(items);
</script>

<template>
  <div class="flex justify-center">
    <div className="flex flex-wrap gap-4">
      <div v-for="movie in movieList" :key="movie.id">
        <MovieItem :movie-data="movie" />
      </div>
    </div>
  </div>
</template>
