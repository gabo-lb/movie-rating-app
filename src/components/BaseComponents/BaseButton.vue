<script setup>
defineProps({
  color: { type: String, default: "blue" },
  isCustomChild: { type: Boolean, default: false },
});
</script>
<template>
  <button
    @click.stop="$emit('on-click')"
    :class="
      !isCustomChild && [
        'text-nowrap min-w-16 h-10 text-sm rounded-md py-1 px-2',
        { ['bg-sky-700 hover:bg-sky-800']: color === 'blue' },
        { ['bg-slate-100 hover:bg-slate-300']: color === 'white' },
      ]
    "
  >
    <slot>CLICK ME!</slot>
  </button>
</template>
