<template>
  <BaseModal>
    <template v-slot:header> This is the header. </template>

    <template v-slot:body> This is the body. </template>

    <template v-slot:footer> This is the footer. </template>
  </BaseModal>
</template>

<script setup>
import BaseModal from "@/components/modals/BaseModal.vue";
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
