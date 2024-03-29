<!--======================================================================
//========================================================================
// Template: Table
//========================================================================
//========================================================================-->
<template>
  <table id="qam-tableComponent" class="qam-table">
    <thead>
      <tr>
        <QamThElement v-for="(field, index) in storeTable.fields" :key="field" :field="field" :index="index"></QamThElement>
        <!-- <th v-for="field in fields" :key="field" @click="sortTable(field)">{{ field }}</th> -->
        <!-- <ThFilter v-for="(filter, index) in storeTable.filters" :key="index" :filter="filter" :index="index"></ThFilter> -->
      </tr>
      <tr>
        <QamThFilter v-for="(filter, index) in storeTable.filters" :key="index" :filter="filter" :index="index" :items="filterData(index)" class="qam-filter"></QamThFilter>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in storeTable.data" :key="item" class="qam-tr" :class="generateClassName(index)">
        <!-- <td v-for="field in fields" :key="field">{{ item[field] }}</td> -->
        <QamTdElement v-for="(field, index) in storeTable.fields" :key="field" :index="index" :cell="item[field]"></QamTdElement>
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
import QamThElement from "@/components/QamThElement.vue";
import QamTdElement from "@/components/QamTdElement.vue";
// import TablePagination from "@//components/TablePagination.vue";
import QamThFilter from "@/components/QamThFilter.vue";

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
