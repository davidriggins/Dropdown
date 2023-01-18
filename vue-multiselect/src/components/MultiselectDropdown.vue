<!--======================================================================
//========================================================================
// Template: MultiselectDropdown
//========================================================================
//========================================================================-->
<template>
  <div class="qam-ms-dropdown">
    <Button class="qam-ms-dropdown__button" @click="dropdownButtonClicked"
      ><span class="qam-span-left">{{ buttonText }}</span
      ><span class="qam-span-right">&nbsp;&nbsp;⮟</span></Button
    >
    <div>
      <MultiselectDropdownContent
        v-show="showContent"
        :items="items"
        :buttonText="buttonText"
        :maxItemsShown="maxItemsShown"
        :useSearch="useSearch"
        class="qam-ms-dropdown__content"
        ref="dropdownModalRef"
        @closeclicked="closeclicked"
      ></MultiselectDropdownContent>
    </div>
  </div>
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
const showContent = ref(false);
const dropdownModalRef = ref(null);

//========================================================================
// Emits
//========================================================================

//========================================================================
// Computed
//========================================================================

//========================================================================
// Lifecycle Hooks
//========================================================================

//========================================================================
// Methods
//========================================================================
// Dropdown button clicked
const dropdownButtonClicked = () => {
  showContent.value = !showContent.value;
};

const closeclicked = () => {
  console.log("Outer close clicked");
  showContent.value = false;
};

onClickOutside(dropdownModalRef, (event) => {
  showContent.value = false;
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
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* position: relative; */
  font-weight: normal;
}

.qam-ms-dropdown {
  display: grid;
}
.qam-ms-dropdown__button {
  position: absolute;
  grid-column: 1 / 2;
}

.qam-ms-dropdown__content {
  /* position: relative; */
  grid-column: 2 / 3;
}
</style>
