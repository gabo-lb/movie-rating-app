<script setup>
import { computed, inject } from "vue";
import { useRoute } from "vue-router";
import MovieItemImage from "../MovieItem/MovieItemImage.vue";
import MovieItemName from "../MovieItem/MovieItemName.vue";
import MovieItemDescription from "../MovieItem/MovieItemDescription.vue";
import MovieItemGenres from "../MovieItem/MovieItemGenres.vue";

const route = useRoute();
const { movieList } = inject("AppContext");

const movieData = computed(() => {
  const { movieId } = route.params;
  const movieData = movieList.value?.[movieId - 1];
  return movieData;
});
</script>

<template>
  <div class="flex m-10 space-x-10 items-center">
    <MovieItemImage :movieData :star-size="4" class="w-96" />
    <div class="text-slate-300">
      <MovieItemName :movieData class="text-6xl" />
      <MovieItemGenres :movieData class="text-3xl" />
      <MovieItemDescription :movieData class="text-lg" />
    </div>
  </div>
</template>
