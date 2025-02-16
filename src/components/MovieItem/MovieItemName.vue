<script setup>
const { movieName } = defineProps({
  movieName: String,
});
</script>

<template>
  <div className="text-xl font-bold whitespace-nowrap">
    {{ movieName }}
  </div>
</template>
