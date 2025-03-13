<script setup>
import MovieItemRatingStar from "./MovieItemRatingStar.vue";

const { movieData } = defineProps({
  movieData: { type: Object, default: null },
  starSize: { type: Number, default: 3 },
});
</script>

<template>
  <div>
    <div className="relative">
      <div className="absolute right-0">
        <MovieItemRatingStar
          :starSize
          :movie-rating="movieData.rating"
          is-filled-star
          is-show-inner-rate-number
        />
      </div>
      <img :src="movieData.image" class="w-full" />
    </div>
  </div>
</template>
