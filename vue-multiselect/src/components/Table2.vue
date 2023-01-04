<!--======================================================================
//========================================================================
// Template: Table
//========================================================================
//========================================================================-->
<template>
  <table id="qam-tableComponent" class="qam-table">
    <thead>
      <tr>
        <ThElement v-for="(field, index) in storeTable.fields" :key="field" :field="field" :index="index"></ThElement>
        <!-- <th v-for="field in fields" :key="field" @click="sortTable(field)">{{ field }}</th> -->
        <!-- <ThFilter v-for="(filter, index) in storeTable.filters" :key="index" :filter="filter" :index="index"></ThFilter> -->
      </tr>
      <tr>
        <ThFilter v-for="(filter, index) in storeTable.filters" :key="index" :filter="filter" :index="index" :items="filterData(index)" class="qam-filter"></ThFilter>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in storeTable.data" :key="item" class="qam-tr" :class="generateClassName(index)">
        <!-- <td v-for="field in fields" :key="field">{{ item[field] }}</td> -->
        <TdElement v-for="(field, index) in storeTable.fields" :key="field" :index="index" :cell="item[field]"></TdElement>
      </tr>
    </tbody>
  </table>
  <!-- <TablePagination></TablePagination> -->
</template>

<!--======================================================================
//========================================================================
// Script
//========================================================================
//========================================================================-->
<script setup>
//========================================================================
// Imports
//========================================================================
import { ref, onMounted, computed } from "vue";
import { sortBy } from "lodash";
import { useStoreTable } from "@/stores/storeTable";
import ThElement from "@/components/ThElement.vue";
import TdElement from "@/components/TdElement.vue";
import TablePagination from "@//components/TablePagination.vue";
import ThFilter from "@/components/ThFilter.vue";

//========================================================================
// Properties
//========================================================================
const props = defineProps({
  // The table data (array of row objects)
  data: { type: Array },
  // The column names
  fields: { type: Array },
});

//========================================================================
// Store
//========================================================================
const storeTable = useStoreTable();

//========================================================================
// Reactive Variables
//========================================================================
let sort = ref(false);
let updatedList = ref([]);

//========================================================================
// Emits
//========================================================================

//========================================================================
// Computed
//========================================================================

//========================================================================
// Lifecycle Hooks
//========================================================================
onMounted(() => {});

//========================================================================
// Methods
//========================================================================

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

const filterData = (index) => {
  const getData = storeTable.data.map((x) => x[storeTable.fields[index]]);

  return getData;
};
</script>

<!--======================================================================
//========================================================================
// Styles
//========================================================================
//========================================================================-->
<style scoped>
@import "@/assets/styles/table2.css";

div {
  width: max-content;
}

table {
  border: 2px solid #ccc;
  overflow: hidden;
}

thead {
}

thead th {
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  padding: 0.1rem 0.2rem;
  border-left: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
}

thead th button {
  font-size: 10px;
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
