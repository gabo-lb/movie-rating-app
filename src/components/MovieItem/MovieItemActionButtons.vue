<script setup>
import { inject } from "vue";
import editIcon from "../../assets/edit-icon.svg";
import trashIcon from "../../assets/trash-icon.svg";

const { deleteMovie, movieList } = inject("MoviesViewContext");
const { handleOpenEditMovieModal } = inject(
  "TheMoviesViewEditModalContext",
  {},
);
const { movieIndex } = inject("MovieItemContext");

const { isShowActionBtns } = defineProps({
  isShowActionBtns: Boolean,
});

const handleDeleteMovie = () => {
  deleteMovie({ movieIndex });
};

const handleEditMovie = () => {
  handleOpenEditMovieModal({
    movieData: { ...movieList?.value?.[movieIndex], movieIndex },
  });
};

const buttonStyle = "bg-slate-400 p-2 rounded-3xl";
</script>
<template>
  <div class="flex" v-if="isShowActionBtns">
    <button :class="buttonStyle" @click="handleEditMovie">
      <img :src="editIcon" class="size-3" />
    </button>
    <button
      :class="['ml-1', 'hover:bg-red-600', buttonStyle]"
      @click="handleDeleteMovie"
    >
      <img :src="trashIcon" class="size-3" />
    </button>
  </div>
</template>
