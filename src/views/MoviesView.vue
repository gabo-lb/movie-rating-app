<script setup>
//External imports
import { computed, provide, ref } from "vue";
//Local imports
import { items } from "../mockData/movies.json";
import MovieList from "../components/MovieList/MovieList.vue";
import MovieModal from "../components/MovieModal/MovieModal.vue";
import TheMoviesViewHeader from "../components/TheMoviesViewHeader/TheMoviesViewHeader.vue";
import TheMoviesViewEditModal from "../components/TheMoviesViewHeader/TheMoviesViewEditModal.vue";

const movieList = ref(items);
const isBgBlured = ref(false);

const addNewMovie = ({ movieData }) => {
  movieList.value.push(movieData);
};

const updateMovieList = ({ movieIndex, newMovieValue, movieKeyValue }) => {
  if (movieKeyValue) {
    movieList.value[movieIndex][movieKeyValue] = newMovieValue;
    return;
  }
  movieList.value[movieIndex] = newMovieValue;
};

const deleteMovie = ({ movieIndex }) => {
  movieList.value.splice(movieIndex, 1);
};

const handleIsBgBlured = (isBlured) => {
  isBgBlured.value = isBlured;
};

const blurStyle = computed(() =>
  isBgBlured.value ? "duration-75 ease-in-out blur-sm" : "",
);

provide("MoviesViewContext", {
  movieList,
  updateMovieList,
  handleIsBgBlured,
  addNewMovie,
  deleteMovie,
  blurStyle,
});
</script>

<template>
  <div :class="['flex flex-col']">
    <div class="flex flex-nowrap mx-[170px] my-6 justify-between text-2xl">
      <TheMoviesViewHeader />
    </div>
    <TheMoviesViewEditModal>
      <MovieList :class="blurStyle" />
    </TheMoviesViewEditModal>
  </div>
</template>
