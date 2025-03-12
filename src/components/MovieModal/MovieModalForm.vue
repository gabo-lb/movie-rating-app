<script setup>
import { ref } from "vue";
import BaseInput from "../BaseComponents/BaseInput.vue";
import BaseSelect from "../BaseComponents/BaseSelect.vue";
import { genres as movieGenres } from "../../mockData/genres.json";

const props = defineProps({
  modelValue: { type: Object, default: null },
});

const movieData = ref(props.modelValue);
</script>
<template>
  <div class="grid w-[34rem] bg-slate-200 shadow-2xl p-6">
    <div class="space-y-6 bg-inherit">
      <BaseInput v-model="movieData.name.value" field-name="Name" auto-focus />
      <BaseInput
        v-model="movieData.description.value"
        field-type="textarea"
        field-name="Description"
      />
      <BaseInput v-model="movieData.image.value" field-name="Image" />
      <BaseSelect
        field-name="Genres"
        v-model="movieData.genres.value"
        :option-list="movieGenres"
      />
      <BaseInput
        v-model="movieData.inTheaters.value"
        field-name="In Theaters"
        field-type="checkbox"
      />
    </div>
  </div>
</template>
