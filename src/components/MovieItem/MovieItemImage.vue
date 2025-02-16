<script setup>
import { inject } from "vue";

const { movieList } = inject("MovieListContext");
const { movieIndex } = inject("MovieItemContext");
const { image: movieImage } = movieList.value[movieIndex];
</script>

<template>
  <div className="h-[34rem] overflow-y-hidden rounded-t-md">
    <img :src="movieImage" />
  </div>
</template>
