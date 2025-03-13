<script setup>
import { inject } from "vue";
import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/vue/24/solid";
import BaseButton from "../BaseComponents/BaseButton.vue";
import { useRouter } from "vue-router";
import { useMovieList } from "../../composables/useMovieList";

const router = useRouter();

const { handleOpenMovieModal } = inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");

const { handleDeleteMovie, movieList } = useMovieList();

defineProps({
  isShowActionBtns: Boolean,
});

const handleEditMovie = () => {
  const movieDataToEdit = { ...movieList?.value?.[movieIndex], movieIndex };
  handleOpenMovieModal({ ...movieDataToEdit, movieIndex });
};

const handleRedirectDetailMovie = () => {
  const movieId = movieList.value[movieIndex].id;
  console.log("AAA: ", { movieId, movieIndex });
  router.push({ name: "movieDetail", params: { movieId } });
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
      @on-click="handleDeleteMovie({ movieIndex })"
      :class="['ml-1', 'hover:bg-red-600', buttonStyle]"
      is-custom-child
    >
      <TrashIcon class="size-3" />
    </BaseButton>

    <BaseButton
      @on-click="handleRedirectDetailMovie"
      :class="['ml-1', 'hover:bg-red-600', buttonStyle]"
      is-custom-child
    >
      <EyeIcon class="size-3" />
    </BaseButton>
  </div>
</template>
