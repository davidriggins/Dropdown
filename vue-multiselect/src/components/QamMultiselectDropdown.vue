<!--======================================================================
//========================================================================
// Template: MultiselectDropdown
//========================================================================
//========================================================================-->
<template>
  <div class="qam-ms-dropdown">
    <div class="qam-ms-dropdown-button-div">
      <QamButton class="qam-ms-dropdown-button" @click="dropdownButtonClicked">
        {{ buttonText + "  ⮟" }}
      </QamButton>
    </div>
    <div class="qam-ms-dropdown-content">
      <MultiselectDropdownContent
        v-show="showContent"
        :items="items"
        :buttonText="buttonText"
        :maxItemsShown="maxItemsShown"
        :useSearch="useSearch"
        ref="dropdownModalRef"
        @closeclicked="closeClicked"
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
import QamButton from "@/components/QamButton.vue";
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

// Close button clicked
const closeClicked = () => {
  showContent.value = false;
};

// Clicked outside dropdown: close.
onClickOutside(dropdownModalRef, (event) => {
  closeClicked();
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
  font-weight: normal;
}

.qam-ms-dropdown {
  margin: 0;
  display: grid;
  grid-template-areas:
    "button"
    "dd-content";
}

.qam-ms-dropdown-button-div {
  grid-area: button;
}

.qam-ms-dropdown-button {
  min-width: 4rem;
}

.qam-ms-dropdown-content {
  grid-area: dd-content;
}
</style>
