<script setup>
import { provide } from "vue";
import MovieItemName from "./MovieItemName.vue";
import MovieItemImage from "./MovieItemImage.vue";
import MovieItemGenres from "./MovieItemGenres.vue";
import MovieItemDescription from "./MovieItemDescription.vue";
import MovieItemRating from "./MovieItemRating.vue";

const { movieIndex } = defineProps({
  movieIndex: Number,
});

provide("MovieItemContext", { movieIndex });
</script>
<template>
  <div className="bg-slate-100 rounded-md w-96 h-[48rem]">
    <MovieItemImage />
    <div className="relative p-4 h-[14rem]">
      <MovieItemName />
      <MovieItemGenres />
      <MovieItemDescription />
      <MovieItemRating />
    </div>
  </div>
</template>
