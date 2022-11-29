<template>
  <div class="dropdown-list">
    <a href="#">{{ title }} &#11206; </a>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Hello");
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}
</style>
