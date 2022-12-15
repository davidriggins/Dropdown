<template>
  <th v-if="isCheckboxField()"><input type="checkbox" class="qam-checkbox" /></th>
  <!-- <th>{{ props.field }}</th> -->
  <th v-else>{{ props.field }}</th>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { sortBy } from "lodash";

onMounted(() => {
  console.log(props.field);
});

const props = defineProps({
  field: {
    type: String,
  },
});

const isCheckboxField = () => {
  if (props.field == "checkbox") {
    console.log("True");
    return true;
  }
  console.log("false");
  return false;
};
</script>

<style scoped>
div {
  display: inline-block;
}
</style>
