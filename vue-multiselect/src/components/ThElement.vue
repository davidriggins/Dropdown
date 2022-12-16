<template>
  <th v-if="isCheckboxField()" :class="generateClassName()" class="qam_th"><input type="checkbox" @click="storeTable.toggleCheckboxes($event)" class="qam-checkbox-toggle" /></th>
  <th v-else :class="generateClassName()" class="qam_th" @click="storeTable.sortTable(props.field, $event)">{{ props.field }}</th>
</template>

<script setup>
import { onMounted } from "vue";
import { useStoreTable } from "@/stores/storeTable";

// Store
const storeTable = useStoreTable();

onMounted(() => {
  // console.log(props.field);
});

const props = defineProps({
  field: {
    type: String,
  },
  index: {
    type: Number,
  },
});

const isCheckboxField = () => {
  if (props.field == "Checkbox") {
    return true;
  }
  return false;
};

const generateClassName = () => {
  return "qam-th-" + props.index;
};
</script>

<style scoped>
@import "@/assets/styles/table2.css";
</style>
