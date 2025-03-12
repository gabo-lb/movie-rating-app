<script setup>
import { defineAsyncComponent, inject, ref } from "vue";
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";

const MovieModal = defineAsyncComponent(
  () => import("../MovieModal/MovieModal.vue"),
);

const { deleteMovie, movieList } = inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");

const { isShowActionBtns } = defineProps({
  isShowActionBtns: Boolean,
});

const isEditMovieModalOpen = ref(false);
const initMovieData = ref(null);

const handleDeleteMovie = () => {
  deleteMovie({ movieIndex });
};

const handleEditMovie = () => {
  const movieDataToEdit = { ...movieList?.value?.[movieIndex], movieIndex };
  initMovieData.value = movieDataToEdit;
  isEditMovieModalOpen.value = true;
};

const handleCloseEditMovieModal = () => {
  initMovieData.value = null;
  isEditMovieModalOpen.value = false;
};

const buttonStyle = "bg-slate-400 p-2 rounded-3xl";
</script>
<template>
  <div class="flex" v-if="isShowActionBtns">
    <MovieModal
      v-if="isEditMovieModalOpen"
      title="Edit Movie"
      :init-data="initMovieData"
      @close="handleCloseEditMovieModal"
    />
    <button :class="buttonStyle" @click="handleEditMovie">
      <PencilIcon class="size-3" />
    </button>
    <button
      :class="['ml-1', 'hover:bg-red-600', buttonStyle]"
      @click="handleDeleteMovie"
    >
      <TrashIcon class="size-3" />
    </button>
  </div>
</template>
