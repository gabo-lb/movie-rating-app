<script setup>
import { computed } from "vue";

const { label, color } = defineProps({
  label: String,
  color: { type: String, default: "blue" },
});

//class=" rounded-md py-1 px-2 mr-1"
</script>
<template>
  <button
    :class="[
      'min-w-16 h-10 text-sm rounded-md py-1 px-2',
      { ['bg-sky-700 hover:bg-sky-800']: color === 'blue' },
      { ['bg-slate-100 hover:bg-slate-300']: color === 'white' },
    ]"
  >
    {{ label }}
  </button>
</template>
