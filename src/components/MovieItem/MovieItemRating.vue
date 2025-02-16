<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";
import { inject, ref, watchEffect } from "vue";

const { movieList, updateMovieList } = inject("MovieListContext");
const { movieIndex } = inject("MovieItemContext");
const movieRating = ref();

const updateRating = (newRating) => {
  updateMovieList({
    movieIndex: movieIndex,
    newMovieValue: newRating,
    movieKeyValue: "rating",
  });
};

watchEffect(() => {
  movieRating.value = movieList.value[movieIndex].rating;
});
</script>
<template>
  <div className="absolute bottom-3 text-sm">
    <div className="flex">
      <div className="w-[90px]">Rating: ({{ movieRating }}/5)</div>
      <div v-for="star in 5" :key="star">
        <button
          @click="updateRating(star)"
          :class="[
            'size-5',
            { 'text-yellow-500': star <= movieRating },
            { 'text-gray-300': star > movieRating },
          ]"
        >
          <StarIcon />
        </button>
      </div>
    </div>
  </div>
</template>
