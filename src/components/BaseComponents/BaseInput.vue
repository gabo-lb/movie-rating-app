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
    <div>
      <div class="flex items-center">
        <div class="mr-2">{{ fieldName }}</div>
        <div
          v-if="hasError"
          class="text-red-700 font-bold text-sm flex justify-end w-full"
        >
          *field is required
        </div>
      </div>
      <textarea
        v-if="fieldType === 'textarea'"
        class="w-full"
        :value="modelValue"
        @input="handleInputChange"
      />
      <input
        v-else
        :type="fieldType"
        class="w-full"
        :value="modelValue"
        @input="handleInputChange"
      />
    </div>
  </div>
</template>
