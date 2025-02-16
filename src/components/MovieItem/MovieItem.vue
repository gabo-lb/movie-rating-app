<script setup>
import MovieItemName from "./MovieItemName.vue";
import MovieItemImage from "./MovieItemImage.vue";
import MovieItemGenres from "./MovieItemGenres.vue";
import MovieItemDescription from "./MovieItemDescription.vue";
import MovieItemRating from "./MovieItemRating.vue";
const { movieData } = defineProps({
  movieData: Object,
});

const {
  name: movieName,
  image: movieImage,
  genres: movieGenres,
  description: movieDescription,
  rating: movieRating,
} = movieData;
</script>
<template>
  <div className="bg-slate-100 rounded-md w-96 h-[48rem]">
    <MovieItemImage :movie-image="movieImage" />
    <div className="relative p-4 h-[14rem]">
      <MovieItemName :movie-name="movieName" />
      <MovieItemGenres :movie-genres="movieGenres" />
      <MovieItemDescription :movie-description="movieDescription" />
      <MovieItemRating :movie-rating="movieRating" />
    </div>
  </div>
</template>
