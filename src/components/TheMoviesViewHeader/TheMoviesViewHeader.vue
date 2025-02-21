<script setup>
import { inject } from "vue";
import MovieModal from "../MovieModal/MovieModal.vue";
import TheMoviesViewAverageRating from "./TheMoviesViewAverageRating.vue";
import TheMoviesViewTotalCounter from "./TheMoviesViewTotalCounter.vue";

const { handleIsBgBlured, blurStyle } = inject("MoviesViewContext");
</script>
<template>
  <div :class="['flex flex-nowrap text-slate-200 mr-4', blurStyle]">
    <TheMoviesViewTotalCounter />
    <div class="mr-6">/</div>
    <TheMoviesViewAverageRating />
  </div>
  <MovieModal
    :handle-is-modal-open-change="handleIsBgBlured"
    button-label="Add Movie"
  />
</template>
