<template>
  <div class="text-center mt-5 mb-5">
    <h1 class="mt-5 fw-bolder text-success">Component Tests</h1>
    <div class="mt-5">
      <Table2></Table2>
    </div>
  </div>
</template>

<script setup>
import Table2 from "@/components/Table2.vue";
import { useStoreTable } from "@/stores/storeTable";
</script>

<style scoped>
div {
  width: max-content;
}
</style>
