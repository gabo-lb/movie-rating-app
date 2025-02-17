<script setup>
import BaseButton from "./BaseButton.vue";

const { handleOnCancel, handleOnSave, isSaveDisabled } = defineProps({
  handleOnSave: Function,
  handleOnCancel: Function,
  isSaveDisabled: Boolean,
});
</script>
<template>
  <div>
    <BaseButton label="Cancel" color="white" @click="handleOnCancel" />
    <BaseButton
      label="Save"
      :class="[
        'ml-2',
        {
          ['cursor-not-allowed bg-slate-600 hover:bg-slate-700']:
            isSaveDisabled,
        },
      ]"
      @click="handleOnSave"
      :disabled="isSaveDisabled"
    />
  </div>
</template>
