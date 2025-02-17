<script setup>
import { inject, provide, ref, watchEffect } from "vue";
import MovieModalForm from "./MovieModalForm.vue";
import BaseButton from "../BaseComponents/BaseButton.vue";

const { handleIsBgBlured } = inject("MoviesViewtContext");

const isModalOpen = ref(false);

const handleOpenModal = () => {
  isModalOpen.value = true;
};

const handleCloseModal = (event) => {
  if (event === undefined || event?.target?.role === "dialog") {
    isModalOpen.value = false;
  }
};

watchEffect(() => {
  handleIsBgBlured(isModalOpen.value);
});

provide("MovieModalContext", { handleCloseModal, handleOpenModal });
</script>
<template>
  <div @click="handleCloseModal">
    <BaseButton
      @click.stop="handleOpenModal"
      label="Add movie"
      class="absolute right-40 top-2 z-10"
    />
    <div
      v-if="isModalOpen"
      role="dialog"
      class="fixed inset-0 flex items-center justify-center z-10"
    >
      <div class="w-[34rem] h-[30rem] bg-slate-500 inset-0">
        <MovieModalForm />
      </div>
    </div>
  </div>
</template>
