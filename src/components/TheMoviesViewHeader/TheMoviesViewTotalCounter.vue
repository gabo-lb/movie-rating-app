<script setup>
import { inject } from "vue";

const { movieList } = inject("MoviesViewContext");
</script>
<template>
  <div class="text-nowrap mr-6">Total movies: {{ movieList.length }}</div>
</template>
