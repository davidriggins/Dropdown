<template>
  <!-- <div class="text-center mt-5 mb-5">
    <h1 class="mt-5 fw-bolder text-success">Component Tests</h1> -->
  <div class="mt-5">
    <!-- <Table2></Table2> -->
    <!-- <SimpleDropdown @handleSelection="handleSelection" :items="list" :keepSelectedAsText="true"></SimpleDropdown> -->
    <MultiselectDropdown buttonText="Select Me" :items="optionsList"></MultiselectDropdown>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";
import Table2 from "@/components/Table2.vue";
import SimpleDropdown from "@/components/SimpleDropdown.vue";
// import { useStoreTable } from "@/stores/storeTable";
import MultiselectDropdown from "../components/MultiselectDropdown.vue";

const list = ref(["5", "10", "25", "100", "200"]);

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

const handleSelection = (value) => {
  console.log(value);
};
</script>

<style scoped>
div {
  width: max-content;
}
</style>
