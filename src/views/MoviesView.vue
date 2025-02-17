<script setup>
import { computed, provide, ref } from "vue";
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

const averageRating = computed(() => {
  let ratingSum = 0;
  movieList.value.forEach(({ rating: movieRating }) => {
    ratingSum += movieRating;
  });
  const averageRating = ratingSum / movieList.value.length;
  return averageRating.toFixed(1);
});

provide("MoviesViewtContext", {
  movieList,
  updateMovieList,
  handleIsBgBlured,
  addNewMovie,
});

const blurStyle = computed(() =>
  isBgBlured.value ? "duration-75 ease-in-out blur-sm" : "",
);
</script>

<template>
  <div
    class="flex flex-nowrap mx-10 my-4 justify-between text-2xl text-slate-200"
  >
    <div :class="['flex flex-nowrap', blurStyle]">
      <div class="mr-6">Total movies: {{ movieList.length }}</div>
      <div class="mr-6">/</div>
      <div>Average rating: {{ averageRating }}</div>
    </div>
    <MovieModal />
  </div>
  <MovieList :class="blurStyle" />
</template>
