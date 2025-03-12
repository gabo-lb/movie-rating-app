<script setup>
import { inject } from "vue";
import MovieModal from "../MovieModal/MovieModal.vue";
import TheMoviesViewAverageRating from "./TheMoviesViewAverageRating.vue";
import TheMoviesViewTotalCounter from "./TheMoviesViewTotalCounter.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";

const { handleIsBgBlured, handleClearRatings, blurStyle } =
  inject("MoviesViewContext");
</script>
<template>
  <div :class="['flex flex-nowrap text-slate-200 mr-4', blurStyle]">
    <TheMoviesViewTotalCounter />
    <div class="mr-6">/</div>
    <TheMoviesViewAverageRating />
  </div>
  <div class="flex space-x-2">
    <BaseButton @on-click="handleClearRatings" :class="blurStyle">
      Clear ratings
    </BaseButton>
    <MovieModal
      title="Add movie"
      :handle-is-modal-open-change="handleIsBgBlured"
    />
  </div>
</template>
