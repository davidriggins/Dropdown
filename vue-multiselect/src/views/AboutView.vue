<template>
  <!-- <div class="text-center mt-5 mb-5">
    <h1 class="mt-5 fw-bolder text-success">Component Tests</h1> -->
  <div>
    <Table2></Table2>
    <!-- <QamSimpleDropdown @handleSelection="handleSelection" :items="list" :keepSelectedAsText="true"></QamSimpleDropdown> -->
    <!-- <QamMultiselectDropdown buttonText="Select Me" :items="optionsList"></QamMultiselectDropdown> -->
    <!-- <TablePagination :totalPages="240" :perPage="25" :currentPage="currentPage" @pagechanged="onPageChange"></TablePagination> -->
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";
// import Table2 from "@/components/Table2.vue";
import QamSimpleDropdown from "@/components/QamSimpleDropdown.vue";
// import { useStoreTable } from "@/stores/storeTable";
// import TablePagination from "../components/TablePagination.vue";
import QamMultiselectDropdown from "../components/QamMultiselectDropdown.vue";

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

const currentPage = ref(1);

const onPageChange = (page) => {
  console.log(page);
  currentPage.value = page;
};

const handleSelection = (value) => {
  console.log(value);
};
</script>

<style scoped>
div {
  width: max-content;
}
</style>
