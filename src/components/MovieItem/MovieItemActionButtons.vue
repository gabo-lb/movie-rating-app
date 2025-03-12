<script setup>
import { inject } from "vue";
import { PencilIcon, TrashIcon } from "@heroicons/vue/24/solid";
import BaseButton from "../BaseComponents/BaseButton.vue";

const { deleteMovie, movieList, handleOpenMovieModal } =
  inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");

defineProps({
  isShowActionBtns: Boolean,
});

const handleDeleteMovie = () => {
  deleteMovie({ movieIndex });
};

const handleEditMovie = () => {
  const movieDataToEdit = { ...movieList?.value?.[movieIndex], movieIndex };
  handleOpenMovieModal({ ...movieDataToEdit, movieIndex });
};

const buttonStyle = "bg-slate-400 p-2 rounded-3xl";
</script>
<template>
  <div class="flex" v-if="isShowActionBtns">
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
