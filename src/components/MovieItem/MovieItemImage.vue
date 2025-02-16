<script setup>
import { inject } from "vue";
import MovieItemRatingStar from "./MovieItemRatingStar.vue";

const { movieList } = inject("MovieListContext");
const { movieIndex } = inject("MovieItemContext");
const { image: movieImage } = movieList.value[movieIndex];
</script>

<template>
  <div className="relative h-[34rem] overflow-y-hidden rounded-t-md">
    <div className="absolute top-2 right-2">
      <MovieItemRatingStar
        :star-size="3"
        is-filled-star
        is-show-inner-rate-number
      />
    </div>
    <img :src="movieImage" />
  </div>
</template>
