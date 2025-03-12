<script setup>
import { inject } from "vue";
import TheMoviesViewAverageRating from "./TheMoviesViewAverageRating.vue";
import TheMoviesViewTotalCounter from "./TheMoviesViewTotalCounter.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";

const { handleClearRatings } = inject("MoviesViewContext");
</script>
<template>
  <div class="flex flex-nowrap mx-[170px] my-6 justify-between text-2xl">
    <div class="flex flex-nowrap text-slate-200 mr-4">
      <TheMoviesViewTotalCounter />
      <div class="mr-6">/</div>
      <TheMoviesViewAverageRating />
    </div>
    <div class="flex space-x-2">
      <BaseButton @on-click="handleClearRatings"> Clear Ratings </BaseButton>
      <BaseButton @on-click="$emit('open-add-movie')"> Add Movie </BaseButton>
    </div>
  </div>
</template>
