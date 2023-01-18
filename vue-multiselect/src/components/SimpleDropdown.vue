<!--======================================================================
//========================================================================
// Template: SimpleDropdown
//========================================================================
//========================================================================-->
<template>
  <div class="qam-simple-dropdown" ref="dropdownRef">
    <QamButton @click="toggleDropdown" class="qam-simple-dropdown-button">
      {{ buttonTextLocal + "  ⮟" }}
    </QamButton>

    <ul v-if="show" class="qam-simple-dropdown-content">
      <li v-for="(item, index) in items" :key="index" class="qam-simple-dropdown-item" @click="itemWasSelected(item)">{{ item }}</li>
    </ul>
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
import { ref, onMounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import QamButton from "@/components/QamButton.vue";

//========================================================================
// Properties
//========================================================================
const props = defineProps({
  // The list of items in the dropdown.
  items: { type: Array },
  // The (original) button text you want.
  buttonText: { type: String, default: "Select" },
  // Keep the selected value as the button text.
  keepSelectedAsText: { type: Boolean, default: false },
  // The current selected item.
  selectedItem: { type: String },
});

//========================================================================
// Store
//========================================================================

//========================================================================
// Reactive Variables
//========================================================================
const show = ref(false);
const buttonTextLocal = ref("");
const itemSelected = ref("");

//========================================================================
// Emits
//========================================================================
const emits = defineEmits(["handleSelection"]);

//========================================================================
// Lifecycle Hooks
//========================================================================
onMounted(() => {
  buttonTextLocal.value = props.buttonText;
});

//========================================================================
// Methods
//========================================================================

// Toggle the dropdown
const toggleDropdown = () => {
  show.value = !show.value;
};

// Emit with the item selected.
// Keep the selected item as dropdown button text if chosen to do so.
const itemWasSelected = (item) => {
  show.value = false;
  itemSelected.value = item;

  if (props.keepSelectedAsText) {
    buttonTextLocal.value = item;
  }
  emits("handleSelection", item);
};

// Close dropdown if click outside.
const dropdownRef = ref(null);
onClickOutside(dropdownRef, (/*event*/) => {
  show.value = false;
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
  position: relative;
  font-weight: normal;
}

.qam-simple-dropdown-button {
  min-width: 4rem;
}

.qam-simple-dropdown {
  margin: 0;
  position: relative;
  display: inline-block;
}

.qam-simple-dropdown-content {
  display: block;
  position: absolute;
  margin: 0;
  padding: 0;

  width: 100%; /* width: fit-content; */
  border: 1px solid var(--qam-color-border);
  border-radius: var(--qam-border-radius);

  /* Scrolling in dropdown */
  max-height: 30rem; /* Maximum height of viewable content */
  overflow: hidden; /* Hides the overflow content */
  overflow-y: auto; /* Sets y scroll bars */
  z-index: 1;
}

.qam-simple-dropdown-item {
  background-color: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0 0.3rem;
  width: 100%;
  display: block;
  z-index: 2;
  border: 2px solid #fff;
}

.qam-simple-dropdown-item:hover {
  background-color: var(--qam-color-element-hover);
}

.qam-simple-dropdown-item:active {
  border: 2px solid #00f;
}

/* .qam-simple-dropdown {
  display: inline-block;
} */
</style>
