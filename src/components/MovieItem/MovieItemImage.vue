<script setup>
const { movieImage } = defineProps({
  movieImage: String,
});
</script>

<template>
  <div className="h-[34rem] overflow-y-hidden rounded-t-md">
    <img :src="movieImage" />
  </div>
</template>
