<script setup>
const { movieData } = defineProps({
  movieData: Object,
});
</script>

<template>
  <div>Movie name: {{ movieData.name }}</div>
</template>
