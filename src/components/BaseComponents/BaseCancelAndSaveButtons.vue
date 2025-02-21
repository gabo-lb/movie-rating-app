<script setup>
import BaseButton from "./BaseButton.vue";

const { handleOnCancel, handleOnSave, isSaveDisabled } = defineProps({
  handleOnSave: Function,
  handleOnCancel: Function,
  isSaveDisabled: Boolean,
});
</script>
<template>
  <BaseButton label="Cancel" color="white" @click="handleOnCancel" />
  <BaseButton
    label="Save"
    :class="[
      'ml-2',
      {
        ['cursor-not-allowed hover:bg-slate-700']: isSaveDisabled,
      },
    ]"
    @click="handleOnSave"
    :disabled="isSaveDisabled"
  />
</template>
