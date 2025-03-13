<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useMovieList } from "../composables/useMovieList";
import MovieItemImage from "../components/MovieItem/MovieItemImage.vue";
import MovieItemName from "../components/MovieItem/MovieItemName.vue";
import MovieItemGenres from "../components/MovieItem/MovieItemGenres.vue";
import MovieItemDescription from "../components/MovieItem/MovieItemDescription.vue";
import BaseButton from "../components/BaseComponents/BaseButton.vue";
import { ArrowLeftCircleIcon } from "@heroicons/vue/24/solid";

const route = useRoute();
const { movieList } = useMovieList();

const movieData = computed(() => {
  const { movieId } = route.params;
  const movieData = movieList.value?.[movieId - 1];
  return movieData;
});
</script>

<template>
  <div clas="grid-col">
    <BaseButton class="m-10" @on-click="$router.back()">
      <div class="flex items-center">
        <ArrowLeftCircleIcon class="size-6 pr-1" />
        <div class="text-sm">Go back</div>
      </div>
    </BaseButton>
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
  </div>
</template>
