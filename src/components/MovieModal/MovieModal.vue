<script setup>
import { computed, inject, onMounted, ref, watchEffect } from "vue";
import MovieModalForm from "./MovieModalForm.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";
import BaseModal from "../BaseComponents/BaseModal.vue";
import BaseCancelAndSaveButtons from "../BaseComponents/BaseCancelAndSaveButtons.vue";

const { addNewMovie, blurStyle } = inject("MoviesViewContext", {});

const isModalOpen = ref(false);

const {
  title,
  initData,
  isInitModalOpen,
  handleSaveModal,
  handleCancelModal,
  handleIsModalOpenChange,
} = defineProps({
  title: { type: String, default: null },
  initData: { type: Object, default: null },
  isInitModalOpen: { type: Boolean, default: false },
  isCustomOpenButton: { type: Boolean, default: false },
  handleSaveModal: { type: Function, default: () => null },
  handleCancelModal: { type: Function, default: () => null },
  handleIsModalOpenChange: { type: Function, default: () => null },
});

const getInitMovieData = () => ({
  name: { hasError: false, value: "" },
  description: { hasError: false, value: "" },
  image: { hasError: false, value: "" },
  genres: { hasError: false, value: [] },
  inTheaters: { hasError: false, value: false },
});

const movieData = ref(getInitMovieData());

watchEffect(() => {
  if (initData) {
    const { name, description, image, genres, inTheaters, rating } = initData;
    movieData.value = {
      name: { hasError: false, value: name },
      description: { hasError: false, value: description },
      image: { hasError: false, value: image },
      genres: { hasError: false, value: genres },
      rating: { hasError: false, value: rating },
      inTheaters: { hasError: false, value: inTheaters },
    };
  }
});

const requiredFields = ref(["name"]);

const isEditMode = ref(Boolean(initData));

const handleOpenModal = () => {
  isModalOpen.value = true;
};

const handleCloseModal = (event) => {
  if (event === undefined || event?.target?.role === "dialog") {
    isModalOpen.value = false;
    handleCancelModal?.();
    movieData.value = getInitMovieData();
  }
};

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
  x;
};

watchEffect(() => {
  isModalOpen.value = isInitModalOpen;
});

watchEffect(() => {
  handleIsModalOpenChange?.(isModalOpen.value);
});
</script>
<template>
  <div v-if="!isCustomOpenButton">
    <BaseButton @on-click="handleOpenModal" :class="blurStyle">
      {{ title }}
    </BaseButton>
  </div>
  <BaseModal :title v-if="isModalOpen" @close="handleCloseModal">
    <template #body>
      <MovieModalForm v-model="movieData" />
    </template>
    <template #footer>
      <BaseCancelAndSaveButtons
        :handle-on-cancel="handleOnCancel"
        :handle-on-save="handleOnSave"
        :is-save-disabled="isSaveDisabled"
      />
    </template>
  </BaseModal>
</template>
