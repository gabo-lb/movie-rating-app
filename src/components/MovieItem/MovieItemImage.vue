<script setup>
import { inject, ref, watchEffect } from "vue";
import MovieItemRatingStar from "./MovieItemRatingStar.vue";

const { movieList } = inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");

const movieImage = ref();

watchEffect(() => {
  const { image } = movieList.value[movieIndex] ?? {};
  movieImage.value = image || "";
});
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
