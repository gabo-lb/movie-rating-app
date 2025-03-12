<script setup>
import { inject } from "vue";
import MovieItem from "../MovieItem/MovieItem.vue";

const { movieList } = inject("MoviesViewContext");
</script>

<template>
  <div class="flex justify-center mx-6 min-w-96">
    <div className="flex flex-wrap gap-4">
      <TransitionGroup>
        <div v-for="(movie, movieIndex) in movieList" :key="movie.id">
          <MovieItem :key="movieIndex" :movie-index="movieIndex" />
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  scale: 10%;
}
</style>
