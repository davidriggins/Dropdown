<template>
  <div>
    <!-- <Table2></Table2> -->
    <!-- <Table></Table> -->
    <Dropdown></Dropdown>
    <!-- <button @click="openModal">Show Modal</button> -->
    <!-- <DropdownModal v-if="showModal" @closeModal="closeModal"></DropdownModal> -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import Dropdown from "../components/Dropdown.vue";
import Table from "@/components/Table.vue";
import Table2 from "@/components/Table2.vue";
// import DropdownModal from "../components/modals/DropdownModal.vue";

// const showModal = ref(false);

// const openModal = () => {
//   showModal.value = true;
// };

// const closeModal = () => {
//   showModal.value = false;
// };

//const filteredOptions = ref(["Hello1", "Hello2", "Hello3"]);

const optionsList = ref([
  "Hello1",
  "12345678911234567892123456789312345678941234567895123456789612345678971234567898",
  "Hello3",
  "Hello4",
  "Hello5",
  "Hello6",
  "Hello7",
  "Hello8",
  "Hello9",
  "Hello10",
  "Hello11",
  "Hello12",
  "Hello13",
  "Hello14",
  "Hello15",
  "Hello16",
  "Hello17",
  "Hello18",
  "Hello19",
  "Hello20",
  "Hello21",
  "Hello22",
  "Hello23",
  "Hello24",
]);
</script>

<style scoped>
@import "@/assets/styles/project.css";

.list-item {
  list-style-type: none;
}
</style>
