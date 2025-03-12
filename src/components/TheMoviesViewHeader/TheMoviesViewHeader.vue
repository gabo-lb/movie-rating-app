<script setup>
import { defineAsyncComponent, inject, ref } from "vue";
import TheMoviesViewAverageRating from "./TheMoviesViewAverageRating.vue";
import TheMoviesViewTotalCounter from "./TheMoviesViewTotalCounter.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";

const MovieModal = defineAsyncComponent(
  () => import("../MovieModal/MovieModal.vue"),
);

const { handleClearRatings } = inject("MoviesViewContext");

const isAddMovieModalOpen = ref(false);

const handleOpenMovieModal = () => {
  isAddMovieModalOpen.value = true;
};

const handleCloseMovieModal = () => {
  isAddMovieModalOpen.value = false;
};
</script>
<template>
  <div class="flex flex-nowrap mx-[170px] my-6 justify-between text-2xl">
    <div class="flex flex-nowrap text-slate-200 mr-4">
      <TheMoviesViewTotalCounter />
      <div class="mr-6">/</div>
      <TheMoviesViewAverageRating />
    </div>
    <div class="flex space-x-2">
      <BaseButton @on-click="handleClearRatings"> Clear Ratings </BaseButton>
      <BaseButton @on-click="handleOpenMovieModal"> Add Movie </BaseButton>
      <MovieModal
        v-if="isAddMovieModalOpen"
        title="Add movie"
        @close="handleCloseMovieModal"
      />
    </div>
  </div>
</template>
