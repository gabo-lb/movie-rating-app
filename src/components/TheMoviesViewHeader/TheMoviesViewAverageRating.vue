<script setup>
import { computed } from "vue";
import { useMovieList } from "../../composables/useMovieList";

const { movieList } = useMovieList();

const averageRating = computed(() => {
  let ratingSum = 0;
  movieList.value.forEach(({ rating: movieRating }) => {
    ratingSum += movieRating;
  });
  const averageRating = ratingSum / movieList.value.length;
  return averageRating.toFixed(1);
});
</script>

<template>
  <div class="text-nowrap">Average rating: {{ averageRating }}</div>
</template>
