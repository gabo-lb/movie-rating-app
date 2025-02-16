<script setup>
import { provide, ref } from "vue";
import MovieList from "../components/MovieList/MovieList.vue";
import { items } from "../movies.json";

const movieList = ref(items);

const updateMovieList = ({ movieIndex, newMovieValue, movieKeyValue }) => {
  movieList.value[movieIndex][movieKeyValue] = newMovieValue;
};

provide("MoviesViewtContext", { movieList, updateMovieList });
</script>

<template>
  <div className="m-8">
    <MovieList />
  </div>
</template>
