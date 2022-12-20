<template>
  <!-- <div class="text-center mt-5 mb-5">
    <h1 class="mt-5 fw-bolder text-success">Component Tests</h1> -->
  <div class="mt-5">
    <!-- <Table2></Table2> -->
    <SimpleDropdown :items="list" :keepSelectedAsText="true"></SimpleDropdown>
  </div>
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";
import Table2 from "@/components/Table2.vue";
import SimpleDropdown from "@/components/SimpleDropdown.vue";
import { useStoreTable } from "@/stores/storeTable";

const list = ref(["5", "10", "25", "100", "200"]);
</script>

<style scoped>
div {
  width: max-content;
}
</style>
