<script setup>
import { provide, ref } from "vue";
import { items } from "./mockData/movies.json";

const movieList = ref(items);

/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/vue/24/solid";
provide("AppContext", { movieList });
</script>

<template>
  <!-- This is where your template goes	-->
  <router-view />
</template>
