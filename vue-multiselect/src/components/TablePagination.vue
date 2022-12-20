<template>
  <div>
    <ul>
      <li>
        <Button>Previous</Button>
      </li>
      <li v-for="index in items" :key="index">
        <Button>{{ buttonNumbers[index - 1] }}</Button>
      </li>
      <li>
        <Button>Next</Button>
      </li>
    </ul>
    <SimpleDropdown class="qam-tp-dropdown"></SimpleDropdown>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Button from "@/components/Button.vue";
import SimpleDropdown from "@/components/SimpleDropdown.vue";

const radius = ref(2);
const items = ref(0);
const buttonNumbers = ref([]);

onMounted(() => {
  items.value = radius.value * 2 + 1;
  for (var i = 0; i < items.value; i++) {
    console.log("hello");
    buttonNumbers.value[i] = i + 1;
  }
  console.log(buttonNumbers.value);
});
</script>

<style scoped>
div {
  border-radius: 0.3rem;
  border: 2px solid #ccc;
}

li {
  display: inline-block;
  margin: 0 0.2rem;
  padding: 0 0;
}

ul {
  display: inline-block;
  margin: 0;
  padding: 0;
  /* width: 100%; */
}

/* .qam-tp-dropdown {
  display: inline-block;
} */
</style>
