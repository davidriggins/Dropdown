<template>
  <div class="qam-simple-dropdown">
    <Button @click="toggleDropdown" class="qam-simple-dropdown-button"> {{ buttonText }} </Button>
    <ul v-if="show" class="qam-simple-dropdown-content">
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from "@/components/Button.vue";

const show = ref(false);
const list = ref(["5", "10", "25", "100", "200"]);
const buttonText = ref("");

onMounted(() => {
  buttonText.value = list.value[0] + "  ⮟";
});

const toggleDropdown = () => {
  show.value = !show.value;
};
</script>

<style scoped>
/* *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  font-weight: normal;
} */

Button {
  cursor: pointer;
  min-width: 50px;
}
div {
  margin: 0.3rem 0.3rem 0.3rem 2rem;
  position: relative;
  display: inline-block;
}

ul {
  display: block;
  position: absolute;
  margin: 0;
  padding: 0;
  /* width: fit-content; */
  overflow: auto;
  z-index: 1;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  display: block;
  z-index: 1;
}

/* .qam-simple-dropdown {
  display: inline-block;
} */
</style>
