<template>
  <div>
    <DropdownVue></DropdownVue>
    <!-- <h1>Home</h1>
    <ul>
      <li
        class="list-item"
        v-for="(option, index) of filteredOptions"
        :key="index"
      >
        <span><input type="checkbox" /> option</span>
      </li>
    </ul> -->
  </div>
</template>

<script setup>
//import { ref } from "vue";
import DropdownVue from "../components/Dropdown.vue";

//const filteredOptions = ref(["Hello1", "Hello2", "Hello3"]);
</script>

<style scoped>
@import "@/assets/styles/project.css";

.list-item {
  list-style-type: none;
}
</style>
