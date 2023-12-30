<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/Button.vue";
import ReaderModal from "./components/ReaderModal.vue";

const modalState = ref(false);
</script>

<template>
  <div>
    <div class="flex flex-col gap-3">
      <textarea
        spellcheck="false"
        class="resize-y rounded-lg ring-2 ring-red-400 p-2"
      ></textarea>
      <div class="flex gap-x-3">
        <Button class="w-full"> Parse dat shit</Button>
        <Button class="w-full" @click="modalState = !modalState"> Read the thing </Button>
      </div>
    </div>
  </div>

  <div
    class="absolute inset-0 transition-opacity bg-black/30"
    :class="[modalState ? 'opacity-1' : 'opacity-0 pointer-events-none']"
  >
    <Button @click="modalState = !modalState"> Close me lol</Button>
    <ReaderModal />
  </div>
</template>
