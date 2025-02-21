<script setup>
import { provide, ref } from "vue";
import MovieItemName from "./MovieItemName.vue";
import MovieItemImage from "./MovieItemImage.vue";
import MovieItemGenres from "./MovieItemGenres.vue";
import MovieItemDescription from "./MovieItemDescription.vue";
import MovieItemRating from "./MovieItemRating.vue";
import MovieItemActionButtons from "./MovieItemActionButtons.vue";

const { movieIndex } = defineProps({
  movieIndex: Number,
});

const isMouseOverMovieCard = ref(false);

const handleMouseEnter = () => {
  isMouseOverMovieCard.value = true;
};

const handleMouseLeave = () => {
  isMouseOverMovieCard.value = false;
};

provide("MovieItemContext", { movieIndex });
</script>
<template>
  <div
    className="bg-slate-100 rounded-md w-96 h-[48rem]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <MovieItemImage />
    <div className="relative p-4 h-[14rem] ">
      <MovieItemName />
      <MovieItemGenres />
      <MovieItemDescription />
      <div
        class="absolute flex flex-nowrap bottom-0 justify-between w-full mb-3"
      >
        <MovieItemRating />
        <MovieItemActionButtons
          class="absolute right-8"
          :is-show-action-btns="isMouseOverMovieCard"
        />
      </div>
    </div>
  </div>
</template>
