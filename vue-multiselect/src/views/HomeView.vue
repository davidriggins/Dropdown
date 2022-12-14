<template>
  <div>
    <Table></Table>
    <!-- <Dropdown></Dropdown> -->
    <!-- <button @click="openModal">Show Modal</button> -->
    <!-- <DropdownModal v-if="showModal" @closeModal="closeModal"></DropdownModal> -->
  </div>
</template>

<script setup>
// import { ref } from "vue";
import Dropdown from "../components/Dropdown.vue";
import Table from "@/components/Table.vue";
// import DropdownModal from "../components/modals/DropdownModal.vue";

// const showModal = ref(false);

// const openModal = () => {
//   showModal.value = true;
// };

// const closeModal = () => {
//   showModal.value = false;
// };

//const filteredOptions = ref(["Hello1", "Hello2", "Hello3"]);
</script>

<style scoped>
@import "@/assets/styles/project.css";

.list-item {
  list-style-type: none;
}
</style>
