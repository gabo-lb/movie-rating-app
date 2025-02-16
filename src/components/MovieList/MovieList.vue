<script setup>
import { ref, provide } from "vue";
import { items } from "../../movies.json";
import MovieItem from "../MovieItem/MovieItem.vue";

const movieList = ref(items);

const updateMovieList = ({ movieIndex, newMovieValue, movieKeyValue }) => {
  movieList.value[movieIndex][movieKeyValue] = newMovieValue;
};

provide("MovieListContext", { movieList, updateMovieList });
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
