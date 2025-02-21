<script setup>
import { inject, ref, watchEffect } from "vue";
import MovieItemRatingStar from "./MovieItemRatingStar.vue";

const { movieList, updateMovieList } = inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");
const movieRating = ref();

const updateRating = (newRating) => {
  updateMovieList({
    movieIndex: movieIndex,
    newMovieValue: newRating,
    movieKeyValue: "rating",
  });
};

watchEffect(() => {
  movieRating.value = movieList.value[movieIndex].rating || "-";
});
</script>
<template>
  <div class="flex text-sm">
    <div class="w-[90px]">Rating: ({{ movieRating }}/5)</div>
    <div v-for="star in 5" :key="star" class="flex items-center">
      <button @click="updateRating(star)">
        <MovieItemRatingStar
          :star-size="1.3"
          :is-filled-star="star <= movieRating"
        />
      </button>
    </div>
  </div>
</template>
