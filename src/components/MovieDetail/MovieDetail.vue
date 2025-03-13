<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import MovieItemImage from "../MovieItem/MovieItemImage.vue";
import MovieItemName from "../MovieItem/MovieItemName.vue";
import MovieItemDescription from "../MovieItem/MovieItemDescription.vue";
import MovieItemGenres from "../MovieItem/MovieItemGenres.vue";
import { useMovieList } from "../../composables/useMovieList";

const route = useRoute();
const { movieList } = useMovieList();

const movieData = computed(() => {
  const { movieId } = route.params;
  const movieData = movieList.value?.[movieId - 1];
  return movieData;
});
</script>

<template>
  <div class="flex m-10 space-x-10 items-center">
    <div class="size-96">
      <MovieItemImage :movieData :star-size="4" />
    </div>
    <div class="text-slate-300">
      <MovieItemName :movieData class="text-6xl" />
      <MovieItemGenres :movieData class="text-3xl" />
      <MovieItemDescription :movieData class="text-lg" />
    </div>
  </div>
</template>
