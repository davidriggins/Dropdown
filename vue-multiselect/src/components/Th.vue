<template>
  <th v-if="isCheckboxField()" :class="generateClassName()" class="qam_th"><input type="checkbox" class="qam-checkbox" /></th>
  <th v-else :class="generateClassName()" class="qam_th">{{ props.field }}</th>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  console.log(props.field);
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
    console.log("True");
    return true;
  }
  console.log("false");
  return false;
};

const generateClassName = () => {
  return "qam-th-" + props.index;
};
</script>

<style scoped></style>
