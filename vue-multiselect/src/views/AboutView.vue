<template>
  <div class="container text-center mt-5 mb-5">
    <h1 class="mt-5 fw-bolder text-success">Component Tests</h1>
    <div class="table-responsive mt-5">
      <Table2 :fields="fields" :data="data"></Table2>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import Table2 from "@/components/Table2.vue";

const fields = ref(["Checkbox", "Session ID", "Publish Time", "ArcGIS", "Build", "Product", "OS Version"]);

const data = reactive([
  { Checkbox: "Checkbox", "Session ID": 23, "Publish Time": "12/31/21 05:31 PM", ArcGIS: "11.1", Build: "41238", Product: "Server", "OS Version": "Win10(1809)" },
  { Checkbox: "Checkbox", "Session ID": 24, "Publish Time": "12/30/21 05:31 AM", ArcGIS: "11.0", Build: "41237", Product: "Server", "OS Version": "Win10(1809)" },
  { Checkbox: "Checkbox", "Session ID": 25, "Publish Time": "12/29/21 05:31 PM", ArcGIS: "3.1", Build: "41236", Product: "Pro", "OS Version": "Win10(1809)" },
  { Checkbox: "Checkbox", "Session ID": 26, "Publish Time": "12/29/21 05:31 AM", ArcGIS: "3.0", Build: "41235", Product: "Pro", "OS Version": "Win10(1809)" },
  { Checkbox: "Checkbox", "Session ID": 27, "Publish Time": "12/27/21 05:31 PM", ArcGIS: "11.1", Build: "41234", Product: "Server", "OS Version": "Win10(1809)" },
]);
</script>
