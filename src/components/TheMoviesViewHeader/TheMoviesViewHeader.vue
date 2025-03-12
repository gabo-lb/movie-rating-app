<script setup>
import { defineAsyncComponent, inject, ref } from "vue";
import TheMoviesViewAverageRating from "./TheMoviesViewAverageRating.vue";
import TheMoviesViewTotalCounter from "./TheMoviesViewTotalCounter.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";

const MovieModal = defineAsyncComponent(
  () => import("../MovieModal/MovieModal.vue"),
);

const { handleIsBgBlured, handleClearRatings, blurStyle } =
  inject("MoviesViewContext");

const isAddMovieModalOpen = ref(false);

const handleOpenMovieModal = () => {
  isAddMovieModalOpen.value = true;
  handleIsBgBlured(true);
};

const handleCloseMovieModal = () => {
  isAddMovieModalOpen.value = false;
  handleIsBgBlured(false);
};
</script>
<template>
  <div :class="['flex flex-nowrap text-slate-200 mr-4', blurStyle]">
    <TheMoviesViewTotalCounter />
    <div class="mr-6">/</div>
    <TheMoviesViewAverageRating />
  </div>
  <div class="flex space-x-2">
    <BaseButton @on-click="handleClearRatings" :class="blurStyle">
      Clear Ratings
    </BaseButton>
    <BaseButton @on-click="handleOpenMovieModal" :class="blurStyle">
      Add Movie
    </BaseButton>
    <MovieModal
      v-if="isAddMovieModalOpen"
      title="Add movie"
      @close="handleCloseMovieModal"
    />
  </div>
</template>
