<!--======================================================================
//========================================================================
// Template
//========================================================================
//========================================================================-->
<template>
  <Button class="qam-dropdown-button" @click="dropdownButtonClicked"
    ><span class="qam-span-left">{{ buttonText }}</span
    ><span class="qam-span-right">&nbsp;&nbsp;⮟</span></Button
  >
  <transition name="modal-fade" v-if="showModal">
    <div class="modal" role="dialog" aria-labelledby="modalTitle" ref="dropdownModalRef" aria-describedby="modalDescription">
      <section class="modal-body" id="modalDescription">
        <MultiselectDropdownContent :items="items" :buttonText="buttonText" :maxItemsShown="maxItemsShown" :useSearch="useSearch" :closeClicked="closeClicked"> </MultiselectDropdownContent>
      </section>
    </div>
  </transition>
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
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import Button from "@/components/Button.vue";
import MultiselectDropdownContent from "@/components/MultiselectDropdownContent.vue";

//========================================================================
// Properties
//========================================================================
const props = defineProps({
  // Array of Strings to be displayed in the dropdown list
  items: { type: Array },
  // Text to be displayed on the dropdown button
  buttonText: { type: String, default: "Select Me" },
  // The maximum number of items to be visible in the dropdown.
  // The dropdown is scrollable
  maxItemsShown: { type: Number, default: 25 },
  // Boolean used to show or not show the Search input
  useSearch: { type: Boolean, default: true },
});

//========================================================================
// Store
//========================================================================

//========================================================================
// Reactive Variables
//========================================================================
const dropdownModalRef = ref(null);
const showModal = ref(false);

//========================================================================
// Emits
//========================================================================
// const emits = defineEmits("closeModal");

//========================================================================
// Computed
//========================================================================

//========================================================================
// Lifecycle Hooks
//========================================================================

//========================================================================
// Methods
//========================================================================
const dropdownButtonClicked = () => {
  showModal.value = !showModal.value;
};

const closeClicked = () => {
  console.log("Modal close was clicked");
  showModal.value = false;
};

onClickOutside(dropdownModalRef, (event) => {
  showModal.value = false;
  // emits("closeModal");
  console.log(event);
});
</script>

<!--======================================================================
//========================================================================
// Styles
//========================================================================
//========================================================================-->
<style scoped>
@import "@/assets/styles/multiselectDropdown.css";
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
}

.modal {
  background: #fff;
  /* box-shadow: 2px 2px 20px 1px; */
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  border-radius: 0.3rem;
}
.modal-body {
  position: relative;
  padding: 0;
}

/* .modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
} */
</style>
