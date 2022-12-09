<template>
  <div class="outer-div" ref="dropdownRef">
    <transition name="button-click">
      <input type="button" class="dropdown-button" :value="title" style="padding: 0.3rem" @click="storeDropdown.toggleDropdown" />
    </transition>
    <transition name="fade">
      <div class="dropdown-content" v-if="storeDropdown.show">
        <input type="text" placeholder="Search" v-model="storeDropdown.input" class="search-text list-item" v-autofocus />
        <label class="select-all list-item"> <input type="checkbox" class="select-all" name="select-all" @click="storeDropdown.toggleCheckbox($event)" /> {{ storeDropdown.selectAllText }} </label>
        <a href="#" class="clear-link">Clear All</a>

        <div class="dropdown-list">
          <label v-for="(option, index) in storeDropdown.filteredList()" :key="index" class="list-item">
            <input type="checkbox" name="checkbox-item" @click="storeDropdown.inspectCheckAll()" /> {{ option }}
          </label>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
/*========================================================================
  script section 
  ========================================================================*/
import { ref } from "vue";
import { useStoreDropdown } from "@/stores/storeDropdown";
import { onClickOutside } from "@vueuse/core";
import { vAutofocus } from "@/directives/vAutofocus";

// Store
const storeDropdown = useStoreDropdown();

// Dropdown button content
var title = ref("This is a dropdown");
title.value = title.value += "  ⮟";

// Click outside
const dropdownRef = ref(null);
onClickOutside(dropdownRef, (/*event*/) => {
  storeDropdown.clear();
  storeDropdown.show = false;
});
</script>

<style scoped>
/*========================================================================
  style section 
  ========================================================================*/

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
}

.outer-div {
  width: max-content;
}

.dropdown-button {
  display: inline-block;
  margin: 0.2rem;
  border: 1px solid #ccc;

  border-radius: 0.3rem;

  box-shadow: 2px 2px 10px 1px;
  z-index: 1; /* Puts item on top */

  transition: background-color 0.5s;
}

.dropdown-button:hover {
  cursor: pointer;
  background-color: #ccc;
}

.dropdown-content {
  max-width: 600px;
  margin: 0.2rem;
  border-radius: 0.3rem;
  display: block;
  width: max-content;
  /* box-sizing: border-box; */
  box-shadow: 2px 2px 10px 1px;
}

.search-text {
  margin: 0.3rem 0;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
}

.select-all {
  margin: 0.3rem 0;
  /* border: 1px solid #2b2d42; */
  border: 1px solid #ccc;
  border-radius: 0.3rem;
}
.dropdown-list {
  padding: 0;

  /* Scrolling in dropdown */
  max-height: 30rem; /* Maximum height of viewable content */
  overflow: hidden; /* Hides the overflow content */
  overflow-y: auto; /* Sets y scroll bars */

  border: 1px solid #ccc;
  border-radius: 0.3rem;
  width: max-content; /* Sets the width to the size of content */
}

.list-item {
  padding: 0 0.3rem;
  display: block;
}

.list-item:hover,
.list-item:focus {
  cursor: pointer;
  background-color: #f0f0f0;
}

.button-click-enter-active,
.button-click-leave-active {
  transition: opacity 5s ease-in-out;
}

.button-click-enter-from,
.button-click-leave-to {
  opacity: 0;
}
</style>
