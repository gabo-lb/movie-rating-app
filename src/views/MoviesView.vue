<script setup>
import { provide, ref } from "vue";
import { items } from "../mockData/movies.json";
import MovieList from "../components/MovieList/MovieList.vue";
import MovieModal from "../components/MovieModal/MovieModal.vue";

const movieList = ref(items);
const isBgBlured = ref(false);

const addNewMovie = ({ movieData }) => {
  movieList.value.push(movieData);
};

const updateMovieList = ({ movieIndex, newMovieValue, movieKeyValue }) => {
  movieList.value[movieIndex][movieKeyValue] = newMovieValue;
};

const handleIsBgBlured = (isBlured) => {
  isBgBlured.value = isBlured;
};

provide("MoviesViewtContext", {
  movieList,
  updateMovieList,
  handleIsBgBlured,
  addNewMovie,
});
</script>

<template>
  <MovieModal />
  <div :class="['m-16', { 'duration-75 ease-in-out blur-sm': isBgBlured }]">
    <MovieList />
  </div>
</template>
