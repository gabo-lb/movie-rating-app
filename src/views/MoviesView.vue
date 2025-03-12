<script setup>
//External imports
import { provide, ref } from "vue";
//Local imports
import { items } from "../mockData/movies.json";
import MovieList from "../components/MovieList/MovieList.vue";
import TheMoviesViewHeader from "../components/TheMoviesViewHeader/TheMoviesViewHeader.vue";

const movieList = ref(items);

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

const handleClearRatings = () => {
  const updatedMovieList = movieList.value.map((movie) => ({
    ...movie,
    rating: null,
  }));
  movieList.value = updatedMovieList;
};

provide("MoviesViewContext", {
  movieList,
  updateMovieList,
  handleClearRatings,
  addNewMovie,
  deleteMovie,
});
</script>

<template>
  <div class="flex flex-col">
    <TheMoviesViewHeader />
    <MovieList />
  </div>
</template>
