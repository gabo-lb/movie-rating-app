<script setup>
const { hasError, fieldName, fieldType, modelValue } = defineProps({
  hasError: Boolean,
  fieldName: String,
  fieldType: { type: String, default: "text" },
  modelValue: [String, Boolean],
});

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
  <div
    :class="[
      {
        'flex whitespace-nowrap size-4 items-center gap-2':
          fieldType === 'checkbox',
      },
    ]"
  >
    <div class="flex items-center text-sm">
      <div class="mr-2">{{ fieldName }}</div>
      <div
        v-if="hasError"
        class="text-red-700 font-bold flex justify-end w-full"
      >
        *field is required
      </div>
    </div>
    <textarea
      v-if="fieldType === 'textarea'"
      class="w-full text-sm px-1"
      :value="modelValue"
      @input="handleInputChange"
    />
    <input
      v-else
      :type="fieldType"
      class="w-full h-8 text-sm px-1"
      :value="modelValue"
      @input="handleInputChange"
    />
  </div>
</template>
