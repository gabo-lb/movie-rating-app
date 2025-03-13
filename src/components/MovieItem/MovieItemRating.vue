<script setup>
import { computed, inject } from "vue";
import MovieItemRatingStar from "./MovieItemRatingStar.vue";

const { movieIndex } = inject("MovieItemContext", {});
const { updateMovieList } = inject("MoviesViewContext", {});

const { movieData } = defineProps({
  movieData: { type: Object, default: null },
});

const movieRating = computed(() => {
  const { rating } = movieData ?? {};
  return rating || "-";
});

const updateRating = (newRating) => {
  updateMovieList?.({
    movieIndex: movieIndex,
    newMovieValue: newRating,
    movieKeyValue: "rating",
  });
};
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
