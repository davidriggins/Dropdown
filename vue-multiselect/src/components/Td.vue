<template>
  <td v-if="isCheckboxField()" :class="generateClassName()" class="qam-td"><input type="checkbox" @click="storeTable.toggleCheckbox()" class="qam-checkbox" /></td>
  <td v-else :class="generateClassName()" class="qam-td">{{ props.cell }}</td>
</template>

<script setup>
import { onMounted } from "vue";
import { useStoreTable } from "@/stores/storeTable";

// Store
const storeTable = useStoreTable();

onMounted(() => {});

const props = defineProps({
  cell: {
    type: String,
  },

  index: {
    type: Number,
  },
});

const isCheckboxField = () => {
  if (props.cell == "Checkbox") {
    return true;
  }
  return false;
};

const generateClassName = () => {
  return "qam-td-" + props.index;
};
</script>

<style scoped></style>
