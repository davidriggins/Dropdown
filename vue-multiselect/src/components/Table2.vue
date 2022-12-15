<template>
  <table id="tableComponent" class="table table-bordered table-striped">
    <thead>
      <th v-for="field in fields" :key="field" @click="sortTable(field)">{{ field }} <i class="bi bi-sort-alpha-down" aria-label="Sort Icon"></i></th>
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

const sortTable = (col) => {
  console.log("Sorting column: ", col);
  sort.value = true;
  updatedList.value = sortBy(props.data, col);
  console.log("UpdatedList: ", updatedList.value);
};
</script>
