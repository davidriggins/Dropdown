<!--======================================================================
//========================================================================
// Template: SimpleDropdown
//========================================================================
//========================================================================-->
<template>
  <div class="qam-simple-dropdown" ref="dropdownRef">
    <Button @click="toggleDropdown" class="qam-simple-dropdown-button">
      {{ buttonLabel + "  ⮟" }}
    </Button>

    <ul v-if="show" class="qam-simple-dropdown-content">
      <li v-for="(item, index) in items" :key="index" @click="itemWasSelected(item)">{{ item }}</li>
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
import Button from "@/components/Button.vue";

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
const buttonLabel = ref("");
const itemSelected = ref("");

//========================================================================
// Emits
//========================================================================
const emits = defineEmits(["handleSelection"]);

//========================================================================
// Lifecycle Hooks
//========================================================================
onMounted(() => {
  buttonLabel.value = props.buttonText;
});

//========================================================================
// Methods
//========================================================================
const toggleDropdown = () => {
  show.value = !show.value;
};

const itemWasSelected = (item) => {
  show.value = false;
  itemSelected.value = item;

  if (props.keepSelectedAsText) {
    buttonLabel.value = item;
  }
  emits("handleSelection", item);
};

// Click outside
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

Button {
  cursor: pointer;
  /* min-width: 50px; */
  min-width: 4rem;
}

div {
  margin: 0;
  position: relative;
  display: inline-block;
}

ul {
  display: block;
  position: absolute;
  margin: 0;
  padding: 0;
  /* width: fit-content; */
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.3rem;

  /* Scrolling in dropdown */
  max-height: 30rem; /* Maximum height of viewable content */
  overflow: hidden; /* Hides the overflow content */
  overflow-y: auto; /* Sets y scroll bars */
  z-index: 1;
}

li {
  background-color: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0 0.3rem;
  width: 100%;
  display: block;
  z-index: 2;
  border: 2px solid #fff;
}

li:hover {
  background-color: #ccc;
}

li:active {
  border: 2px solid #00f;
}

/* .qam-simple-dropdown {
  display: inline-block;
} */
</style>
