<script setup>
import { inject, ref, watchEffect } from "vue";

const { movieList } = inject("MoviesViewContext");
const { movieIndex } = inject("MovieItemContext");
const movieGenres = ref([]);

watchEffect(() => {
  const { genres } = movieList.value[movieIndex] ?? {};
  movieGenres.value = genres || "";
});
</script>
<template>
  <div className="flex gap-2 mb-3">
    <div
      v-for="genre in movieGenres"
      :key="genre"
      className="bg-indigo-600 rounded-3xl"
    >
      <div className="text-slate-100 text-sm px-1">
        {{ genre }}
      </div>
    </div>
  </div>
</template>
