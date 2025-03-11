<script setup>
import { inject, provide, ref, watchEffect } from "vue";
import MovieModalForm from "./MovieModalForm.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";

const isModalOpen = ref(false);

const { blurStyle } = inject("MoviesViewContext", {});

const {
  initData,
  isInitModalOpen,
  buttonLabel,
  handleSaveModal,
  handleCancelModal,
  handleIsModalOpenChange,
} = defineProps({
  isInitModalOpen: { type: Boolean, default: false },
  initData: { type: Object, default: null },
  buttonLabel: { type: String, default: "" },
  handleSaveModal: { type: Function, default: () => null },
  handleCancelModal: { type: Function, default: () => null },
  handleIsModalOpenChange: { type: Function, default: () => null },
});

const handleOpenModal = () => {
  isModalOpen.value = true;
};

const handleCloseModal = (event) => {
  if (event === undefined || event?.target?.role === "dialog") {
    isModalOpen.value = false;
    handleCancelModal?.();
  }
};

watchEffect(() => {
  isModalOpen.value = isInitModalOpen;
});

watchEffect(() => {
  handleIsModalOpenChange?.(isModalOpen.value);
});

provide("MovieModalContext", {
  handleCloseModal,
  handleOpenModal,
  handleSaveModal,
  handleCancelModal,
});
</script>
<template>
  <div @click="handleCloseModal" class="z-40">
    <div v-if="buttonLabel" :class="blurStyle">
      <slot name="button">
        <BaseButton :label="buttonLabel" @click.stop="handleOpenModal" />
      </slot>
    </div>
    <div
      v-if="isModalOpen"
      role="dialog"
      class="fixed inset-0 flex items-center justify-center"
    >
      <MovieModalForm :init-data="initData" />
    </div>
  </div>
</template>
