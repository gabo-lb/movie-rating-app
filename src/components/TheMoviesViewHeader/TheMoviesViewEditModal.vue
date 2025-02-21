<script setup>
import { inject, provide, ref } from "vue";
import MovieModal from "../MovieModal/MovieModal.vue";

const { movieList, handleIsBgBlured } = inject("MoviesViewContext", {});

const initEditData = ref(null);

const handleOpenEditMovieModal = ({ movieData }) => {
  initEditData.value = movieData;
  handleIsBgBlured(true);
};

const handleSaveEditMovieData = ({ editedMovieData }) => {
  const { movieIndex } = initEditData.value ?? {};
  movieList.value[movieIndex] = editedMovieData;
  handleIsBgBlured(false);
};

const handleCancelEditMovieData = () => {
  initEditData.value = null;
  handleIsBgBlured(false);
};

provide("TheMoviesViewEditModalContext", { handleOpenEditMovieModal });
</script>
<template>
  <MovieModal
    :init-data="initEditData"
    :is-init-modal-open="Boolean(initEditData)"
    :handle-save-modal="handleSaveEditMovieData"
    :handle-cancel-modal="handleCancelEditMovieData"
  />
  <slot />
</template>
