<script setup>
const { movieDescription } = defineProps({
  movieDescription: String,
});
</script>
<template>
  <div className="text-sm">{{ movieDescription }}</div>
</template>
