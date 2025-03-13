<script setup>
import { onMounted, ref, useTemplateRef, watchEffect } from "vue";

const { fieldName, fieldType, modelValue, autoFocus } = defineProps({
  fieldName: String,
  refEl: Object,
  fieldType: { type: String, default: "text" },
  modelValue: [String, Boolean],
  autoFocus: Boolean,
});

const isInputFocused = ref(false);
const fieldRef = useTemplateRef(`${fieldName}-input-ref`);

const emit = defineEmits(["update:modelValue"]);

const handleInputChange = (event) => {
  let newValue = event.target.value;
  if (fieldType === "checkbox") {
    newValue = event.target.checked;
  }
  emit("update:modelValue", newValue);
};

//This can be done by passing auto-focus attribute directly to the input element
//But for the sake of the course we do it this way
onMounted(() => {
  if (autoFocus && fieldRef.value) {
    fieldRef.value.focus();
  }
});
</script>
<template>
  <div v-if="fieldType === 'checkbox'" class="flex space-x-2">
    <input
      :ref="`${fieldName}-input-ref`"
      :type="fieldType"
      :value="modelValue"
      @input="handleInputChange"
    />
    <label class="text-sm">{{ fieldName }}</label>
  </div>
  <div v-if="fieldType === 'textarea'" class="relative bg-inherit">
    <textarea
      :ref="`${fieldName}-input-ref`"
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
      :ref="`${fieldName}-input-ref`"
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
