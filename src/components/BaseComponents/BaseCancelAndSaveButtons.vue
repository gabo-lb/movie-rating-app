<script setup>
import BaseButton from "./BaseButton.vue";

const { handleOnCancel, handleOnSave, isSaveDisabled } = defineProps({
  handleOnSave: Function,
  handleOnCancel: Function,
  isSaveDisabled: Boolean,
});
</script>
<template>
  <div class="place-self-end">
    <BaseButton color="white" @click="handleOnCancel">Cancel</BaseButton>
    <BaseButton
      :class="[
        'ml-2',
        {
          ['cursor-not-allowed hover:bg-slate-700']: isSaveDisabled,
        },
      ]"
      @click="handleOnSave"
      :disabled="isSaveDisabled"
    >
      Save
    </BaseButton>
  </div>
</template>
