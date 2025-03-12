<script setup>
import { defineAsyncComponent, inject, ref } from "vue";
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";
import BaseButton from "../BaseComponents/BaseButton.vue";

const EditMovieModal = defineAsyncComponent(
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
    <EditMovieModal
      v-if="isEditMovieModalOpen"
      title="Edit Movie"
      :init-data="initMovieData"
      @close="handleCloseEditMovieModal"
    />
    <BaseButton
      @on-click="handleEditMovie"
      :class="buttonStyle"
      is-custom-child
    >
      <PencilIcon class="size-3" />
    </BaseButton>
    <BaseButton
      @on-click="handleDeleteMovie"
      :class="['ml-1', 'hover:bg-red-600', buttonStyle]"
      is-custom-child
    >
      <TrashIcon class="size-3" />
    </BaseButton>
  </div>
</template>
