<template>
  <BaseModalB>
    <template v-slot:body> This is the body. </template>
  </BaseModalB>
</template>

<script setup>
import BaseModalB from "@/components/modals/BaseModalB.vue";
</script>

<style scoped>
.newCustomer {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
