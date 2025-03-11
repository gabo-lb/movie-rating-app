<script setup>
import { ref } from "vue";

const { hasError, fieldName, fieldType, modelValue } = defineProps({
  hasError: Boolean,
  fieldName: String,
  fieldType: { type: String, default: "text" },
  modelValue: [String, Boolean],
});

const isInputFocused = ref(false);

const emit = defineEmits(["update:modelValue"]);

const handleInputChange = (event) => {
  let newValue = event.target.value;
  if (fieldType === "checkbox") {
    newValue = event.target.checked;
  }
  emit("update:modelValue", newValue);
};
</script>
<template>
  <div v-if="fieldType === 'checkbox'" class="flex space-x-2">
    <input :type="fieldType" :value="modelValue" @input="handleInputChange" />
    <label class="text-sm">{{ fieldName }}</label>
  </div>
  <div v-if="fieldType === 'textarea'" class="relative bg-inherit">
    {{ isResizing }}
    <textarea
      class="base-input-border-styles w-full text-sm min-h-8 max-h-24 bg-transparent outline-none pt-2 pl-2"
      :value="modelValue"
      @input="handleInputChange"
      @focus="isInputFocused = true"
      @blur="isInputFocused = false"
    />
    <label
      :class="[
        'base-input-label-styles h-fit flex mt-2',
        modelValue || isInputFocused ? 'left-0 -top-5' : 'inset-0',
      ]"
    >
      {{ fieldName }}
      <div v-if="!modelValue && !isInputFocused">...</div>
    </label>
  </div>
  <div class="relative bg-inherit" v-if="fieldType === 'text'">
    <input
      class="base-input-border-styles w-full h-10 outline-none pl-2 text-sm bg-transparent"
      :type="fieldType"
      :value="modelValue"
      @input="handleInputChange"
      @focus="isInputFocused = true"
      @blur="isInputFocused = false"
    />
    <label
      :class="[
        'base-input-label-styles self-center',
        modelValue || isInputFocused ? 'left-0 -top-3' : 'inset-0',
      ]"
    >
      {{ fieldName }}
    </label>
  </div>
</template>
