<script setup lang="ts">
import { ref, onMounted } from "vue";
import Button from "./components/Button.vue";
import ReaderModal from "./components/ReaderModal.vue";

const modalState = ref(false);

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalState.value) {
      modalState.value = false;
    }
  });
});
</script>

<template>
  <div class="p-4 text-base">
    <div
      class="h-screen w-screen flex lg:flex-row flex-col gap-4 duration-500 ease-out"
      :class="[modalState ? 'scale-90' : 'scale-100']"
    >
      <div class="flex-shrink-0 w-full lg:w-2/6 flex flex-col gap-3">
        <textarea
          spellcheck="false"
          class="resize-y rounded-lg ring-2 ring-red-400 p-2.5"
          placeholder="Input your shitty fanfic here lol"
        ></textarea>
        <div class="flex gap-x-3">
          <Button class="w-full"> Parse dat shit</Button>
          <Button class="w-1/2" @click="modalState = !modalState">
            Read the thing
          </Button>
        </div>
      </div>
      <div class="w-full">
        <h2 class="font-bold text-3xl">Parsed Contents</h2>
      </div>
    </div>
    <div
      class="absolute inset-0 bg-black/75 backdrop-blur-sm ease-out duration-500"
      :class="[
        modalState
          ? 'opacity-1 scale-100'
          : 'opacity-0 pointer-events-none scale-110',
      ]"
    >
      <ReaderModal />
      <div
        id="lower-third"
        class="absolute mb-7 top-[unset] inset-0 text-white flex flex-col gap-y-2 items-center"
      >
        <div id="indicator">POWAH</div>
        <div class="flex justify-center gap-x-2">
          <Button>Previous subtitle (⬅️)</Button>
          <Button>Restart from beginning (R)</Button>
          <Button>Next subtitle (➡️)</Button>
        </div>
        <span class="text-white text-lg"
          >Press <kbd class="p-1 bg-red-500 rounded-md">ESC</kbd> to exit.</span
        >
      </div>
    </div>
  </div>
</template>
