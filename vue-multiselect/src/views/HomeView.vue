<template>
  <div>
    <DropdownVue></DropdownVue>
    <button @click="openModal">Show Modal</button>
    <DropdownModal v-if="showModal"> </DropdownModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DropdownVue from "../components/modals/DropdownModal.vue";

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};
//const filteredOptions = ref(["Hello1", "Hello2", "Hello3"]);
</script>

<style scoped>
@import "@/assets/styles/project.css";

.list-item {
  list-style-type: none;
}
</style>
