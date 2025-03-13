<script setup>
//External imports
import { defineAsyncComponent, inject, provide, ref } from "vue";
//Local imports
import MovieList from "../components/MovieList/MovieList.vue";
import TheMoviesViewHeader from "../components/TheMoviesViewHeader/TheMoviesViewHeader.vue";

const MovieModal = defineAsyncComponent(
  () => import("../components/MovieModal/MovieModal.vue"),
);

const { movieList } = inject("AppContext");

const editMovieData = ref(null);
const isMovieModalOpen = ref(false);

const addNewMovie = ({ movieData }) => {
  movieList.value.push(movieData);
};

const updateMovieList = ({ movieIndex, newMovieValue, movieKeyValue }) => {
  if (movieKeyValue) {
    movieList.value[movieIndex][movieKeyValue] = newMovieValue;
    return;
  }
  movieList.value[movieIndex] = newMovieValue;
};

const deleteMovie = ({ movieIndex }) => {
  movieList.value.splice(movieIndex, 1);
};

const handleClearRatings = () => {
  const updatedMovieList = movieList.value.map((movie) => ({
    ...movie,
    rating: null,
  }));
  movieList.value = updatedMovieList;
};

const handleOpenMovieModal = (movieData) => {
  if (movieData) {
    editMovieData.value = movieData;
  }
  isMovieModalOpen.value = true;
};

const handleCloseMovieModal = () => {
  editMovieData.value = null;
  isMovieModalOpen.value = false;
};

provide("MoviesViewContext", {
  movieList,
  updateMovieList,
  handleClearRatings,
  addNewMovie,
  deleteMovie,
  handleOpenMovieModal,
});
</script>

<template>
  <div class="flex flex-col">
    <div
      :class="[
        'transition-all duration-500 ease-in-out',
        { ['blur-md']: isMovieModalOpen },
      ]"
    >
      <TheMoviesViewHeader @open-add-movie="handleOpenMovieModal" />
      <MovieList />
    </div>
    <Transition>
      <MovieModal
        v-if="isMovieModalOpen"
        title="Add movie"
        :init-data="editMovieData"
        @close="handleCloseMovieModal"
      />
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active,
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-50px);
}
</style>
