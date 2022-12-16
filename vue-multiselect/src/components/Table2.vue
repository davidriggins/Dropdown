<template>
  <table id="tableComponent">
    <thead>
      <Th v-for="(field, index) in fields" :key="field" :field="field" :index="index"></Th>
      <!-- <th v-for="field in fields" :key="field" @click="sortTable(field)">{{ field }}</th> -->
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="item" class="qam-tr" :class="generateClassName(index)">
        <!-- <td v-for="field in fields" :key="field">{{ item[field] }}</td> -->
        <Td v-for="(field, index) in fields" :key="field" :index="index" :cell="item[field]"></Td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { sortBy } from "lodash";
import { useStoreTable } from "@/stores/storeTable";
import Th from "@/components/Th.vue";
import Td from "@/components/Td.vue";

// Store
const storeTable = useStoreTable();

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

const generateClassName = (index) => {
  return "qam-tr-" + index;
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
