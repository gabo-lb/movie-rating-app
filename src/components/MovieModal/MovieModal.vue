<script setup>
import { computed, defineAsyncComponent, inject, ref, watchEffect } from "vue";
import BaseModal from "../BaseComponents/BaseModal.vue";
import BaseCancelAndSaveButtons from "../BaseComponents/BaseCancelAndSaveButtons.vue";

const MovieModalForm = defineAsyncComponent(
  () => import("./MovieModalForm.vue"),
);

const { addNewMovie, updateMovieList } = inject("MoviesViewContext", {});

const { title, initData } = defineProps({
  title: { type: String, default: null },
  initData: { type: Object, default: null },
});

const getInitMovieData = () => ({
  name: { hasError: false, value: "" },
  description: { hasError: false, value: "" },
  image: { hasError: false, value: "" },
  genres: { hasError: false, value: [] },
  inTheaters: { hasError: false, value: false },
});

const movieData = ref(getInitMovieData());

const requiredFields = ref(["name"]);

const isEditMode = ref(Boolean(initData));

const emit = defineEmits(["close"]);

const handleCloseModal = () => {
  movieData.value = getInitMovieData();
  emit("close");
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
  if (isSaveDisabled.value) return;
  const parsedMovieData = getParsedMovieData({
    dataToParse: movieData.value,
  });
  if (isEditMode.value) {
    updateMovieList({
      movieIndex: movieData.value.movieIndex,
      newMovieValue: parsedMovieData,
    });
  } else {
    addNewMovie({ movieData: parsedMovieData });
  }
  handleCloseModal();
};

watchEffect(() => {
  if (initData) {
    const { name, description, image, genres, inTheaters, rating, movieIndex } =
      initData;
    movieData.value = {
      name: { hasError: false, value: name },
      description: { hasError: false, value: description },
      image: { hasError: false, value: image },
      genres: { hasError: false, value: genres },
      rating: { hasError: false, value: rating },
      inTheaters: { hasError: false, value: inTheaters },
      movieIndex,
    };
  }
});
</script>
<template>
  <BaseModal :title @close="handleCloseModal">
    <template #body>
      <MovieModalForm v-model="movieData" />
    </template>
    <template #footer>
      <BaseCancelAndSaveButtons
        :handle-on-cancel="handleCloseModal"
        :handle-on-save="handleOnSave"
        :is-save-disabled="isSaveDisabled"
      />
    </template>
  </BaseModal>
</template>
