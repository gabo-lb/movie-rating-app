<script setup>
import { StarIcon } from "@heroicons/vue/24/solid";
const { movieData } = defineProps({
  movieData: Object,
});
</script>

<template>
  <div className="bg-slate-100 rounded-md w-96 h-[48rem]">
    <div className="h-[34rem] overflow-y-hidden rounded-t-md">
      <img :src="movieData.image" />
    </div>
    <div className="relative p-4 h-[14rem]">
      <div>
        <div className="text-xl font-bold whitespace-nowrap">
          {{ movieData.name }}
        </div>
        <div className="flex gap-2 mb-3">
          <div
            v-for="genre in movieData.genres"
            :key="genre"
            className="bg-indigo-600 rounded-3xl"
          >
            <div className="text-slate-300 text-sm px-1">
              {{ genre }}
            </div>
          </div>
        </div>
        <div className="text-sm">{{ movieData.description }}</div>
      </div>
      <div className="absolute bottom-3 text-sm">
        <div className="flex">
          <div className="mr-2">Rating: ({{ movieData.rating }}/5)</div>
          <div
            v-for="start in movieData.rating"
            :key="start"
            className="size-5 text-yellow-500"
          >
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
