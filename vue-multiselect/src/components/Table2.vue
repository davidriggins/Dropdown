<template>
  <table id="tableComponent">
    <thead>
      <Th v-for="field in fields" :key="field" :field="field"></Th>
      <!-- <th v-for="field in fields" :key="field" @click="sortTable(field)">{{ field }}</th> -->
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item">
        <td v-for="field in fields" :key="field">{{ item[field] }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { sortBy } from "lodash";
import Th from "@/components/Th.vue";

onMounted(() => {});

let sort = ref(false);
let updatedList = ref([]);

const props = defineProps({
  data: {
    type: Array,
  },
  fields: {
    type: Array,
  },
});

const wasCheckboxRequested = () => {
  if (props.fields.includes("checkbox")) {
    return true;
  }
  return false;
};

const sortTable = (col) => {
  console.log("Sorting column: ", col);
  sort.value = true;
  updatedList.value = sortBy(props.data, col);
  console.log("UpdatedList: ", updatedList.value);
};
</script>

<style scoped>
table {
  /* display: block; */
  border: 2px solid #ccc;
  overflow: hidden;
}

thead {
}

thead th {
  text-align: center;
  font-weight: 500;
  padding: 0.1rem 0.2rem;
  border-left: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
}

tbody tr:nth-child(even) {
  background-color: #eee;
}

tbody tr:hover {
  background-color: lightyellow;
}

td {
  text-align: left;
}

tbody td {
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 0 0.2rem;
}

td.hovered {
  background-color: red;
}

.nowrap {
  white-space: nowrap;
}
</style>
