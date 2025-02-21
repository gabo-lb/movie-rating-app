<script setup>
import { computed, inject, ref, watchEffect } from "vue";
import BaseInput from "../BaseComponents/BaseInput.vue";
import BaseSelect from "../BaseComponents/BaseSelect.vue";
import BaseCancelAndSaveButtons from "../BaseComponents/BaseCancelAndSaveButtons.vue";
import { genres as movieGenres } from "../../mockData/genres.json";

const props = defineProps({
  initData: { type: Object, default: null },
});

const { addNewMovie } = inject("MoviesViewContext");
const { handleCloseModal, handleSaveModal } = inject("MovieModalContext");

const requiredFields = ref(["name"]);

const isEditMode = ref(Boolean(props.initData));

const movieData = ref({
  name: { hasError: false, value: "" },
  description: { hasError: false, value: "" },
  image: { hasError: false, value: "" },
  genres: { hasError: false, value: [] },
  inTheaters: { hasError: false, value: false },
});

const handleOnCancel = () => {
  handleCloseModal();
};

const getParsedMovieData = ({ dataToParse }) => {
  const { name, description, image, genres, inTheaters, rating } = dataToParse;
  return {
    name: name.value,
    description: description.value,
    image: image.value,
    genres: genres.value,
    inTheaters: inTheaters.value,
    rating: rating?.value || "-",
  };
};

const isSaveDisabled = computed(() => {
  let isDisabled = false;
  requiredFields.value.forEach((requiredFieldKey) => {
    const fieldValue = movieData.value[requiredFieldKey].value;
    isDisabled = !fieldValue;
    movieData.value[requiredFieldKey].hasError = isDisabled;
  });
  return isDisabled;
});

const handleOnSave = () => {
  if (!isSaveDisabled.value) {
    const parsedMovieData = getParsedMovieData({
      dataToParse: movieData.value,
    });
    if (!isEditMode.value) {
      addNewMovie({ movieData: parsedMovieData });
    }
    handleSaveModal?.({ editedMovieData: parsedMovieData });
    handleCloseModal();
  }
};

watchEffect(() => {
  if (props.initData) {
    let parsedInitData = {};
    Object.entries(props.initData).forEach(([fieldKey, fieldValue]) => {
      parsedInitData = {
        ...parsedInitData,
        [fieldKey]: { hasError: false, value: fieldValue },
      };
    });
    movieData.value = parsedInitData;
  }
});
</script>
<template>
  <div class="flex flex-col justify-between h-full p-4">
    <BaseInput
      v-model.trim="movieData.name.value"
      field-name="Name"
      :has-error="movieData.name.hasError"
    />
    <BaseInput
      v-model.trim="movieData.description.value"
      field-type="textarea"
      field-name="Description"
    />
    <BaseInput v-model.trim="movieData.image.value" field-name="Image" />
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
    <div class="flex justify-end w-full">
      <BaseCancelAndSaveButtons
        :handle-on-cancel="handleOnCancel"
        :handle-on-save="handleOnSave"
        :is-save-disabled="isSaveDisabled"
      />
    </div>
  </div>
</template>
