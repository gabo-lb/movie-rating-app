<script setup>
import { computed } from "vue";

const { fieldName, modelValue, optionList } = defineProps({
  fieldName: String,
  modelValue: Array,
  optionList: Array,
});
const emit = defineEmits(["update:modelValue"]);

const selectedOption = computed({
  get() {
    return modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  },
});
</script>
<template>
  <div class="relative text-sm bg-inherit">
    <div class="base-input-label-styles h-4 absolute -top-3">
      {{ fieldName }}
    </div>
    <select
      v-model="selectedOption"
      class="base-input-border-styles w-full bg-transparent outline-none"
      multiple
    >
      <option v-for="option in optionList" :key="option" class="p-1">
        {{ option }}
      </option>
    </select>
  </div>
</template>
