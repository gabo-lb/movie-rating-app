<script setup>
import BaseButton from "../BaseComponents/BaseButton.vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";

defineProps({
  title: { type: String, default: null },
});
</script>
<template>
  <div @click="handleCloseModal">
    <div
      role="dialog"
      class="fixed inset-0 flex items-center justify-center z-40"
    >
      <div class="flex flex-col w-[34rem] h-[30rem] bg-slate-200 shadow-2xl">
        <!-- Modal Header -->
        <div class="flex justify-between p-2">
          <div class="text-lg">{{ title }}</div>
          <BaseButton is-custom-child @on-click="$emit('close')">
            <XMarkIcon class="size-7 text-slate-700" />
          </BaseButton>
        </div>

        <!-- Modal Body (Takes up available space) -->
        <div class="flex-grow overflow-auto">
          <slot name="body">
            <div>Modal Body</div>
          </slot>
        </div>

        <!-- Modal Footer (Stays at the bottom) -->
        <div class="h-fit p-2" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
