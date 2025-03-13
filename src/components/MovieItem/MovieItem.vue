<script setup>
import { computed, provide, ref } from "vue";
import MovieItemName from "./MovieItemName.vue";
import MovieItemImage from "./MovieItemImage.vue";
import MovieItemGenres from "./MovieItemGenres.vue";
import MovieItemDescription from "./MovieItemDescription.vue";
import MovieItemRating from "./MovieItemRating.vue";
import MovieItemActionButtons from "./MovieItemActionButtons.vue";
import { useMovieList } from "../../composables/useMovieList";

const { movieList } = useMovieList();

const { movieIndex } = defineProps({
  movieIndex: Number,
});

const movieData = computed(() => movieList?.value?.[movieIndex]);

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
    <div class="h-[34rem] overflow-y-hidden rounded-t-md">
      <MovieItemImage :movie-data="movieData" />
    </div>
    <div className="relative p-4 h-[14rem] ">
      <MovieItemName :movie-data="movieData" />
      <MovieItemGenres :movie-data="movieData" />
      <MovieItemDescription :movie-data="movieData" />
      <div
        class="absolute flex flex-nowrap bottom-0 justify-between w-full mb-3"
      >
        <MovieItemRating :movie-data="movieData" />
        <MovieItemActionButtons
          class="absolute right-8"
          :is-show-action-btns="isMouseOverMovieCard"
        />
      </div>
    </div>
  </div>
</template>
