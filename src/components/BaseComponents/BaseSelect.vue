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
  <div>
    <div>{{ fieldName }}</div>
    <div>
      <select v-model="selectedOption" class="w-full" multiple>
        <option v-for="option in optionList" :key="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>
