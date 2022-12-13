<template>
  <div class="outer-div" ref="dropdownRef">
    <!-- <transition name="button-click"> -->
    <!-- <input type="button" class="dropdown-button" :value="title" style="padding: 0.3rem" @click="storeDropdown.toggleDropdown" /> -->
    <Button class="dropdown-button" @click="storeDropdown.toggleDropdown">{{ buttonText }}</Button>
    <!-- </transition> -->
    <!-- <transition name="fade"> -->
    <div class="dropdown-content" id="dropdown-div" v-if="storeDropdown.show">
      <input type="text" placeholder="Search" v-model="storeDropdown.input" class="search-text list-item" v-autofocus />
      <Button @click="clearAll" class="clear-button">Clear All</Button>
      <Button @click="closeButton" class="close-button">Close</Button>

      <br />
      <label class="select-all list-item"> <input type="checkbox" class="select-all-cb" name="select-all" @click="storeDropdown.toggleSelectAll" /> {{ storeDropdown.selectAllText }} </label>

      <br />
      <div class="dropdown-list">
        <span class="nowrap"
          ><label v-for="(option, index) in storeDropdown.filteredList()" :key="index" class="list-item">
            <input type="checkbox" name="checkbox-item" class="list-item-cb" @click="storeDropdown.toggleCheckbox" />{{ option }}
          </label>
        </span>
      </div>
    </div>
    <!-- </transition> -->
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
import Button from "@/components/Button.vue";

// Store
const storeDropdown = useStoreDropdown();

// Dropdown button content
var buttonText = ref("This is my dropdown");
buttonText.value = buttonText.value += "  ⮟";

const clearAll = () => {
  storeDropdown.clear();
};

const closeButton = () => {
  console.log("Close button checked");
  console.log(storeDropdown.checkboxesChecked);
};

const isVisible = (elem) => {
  console.log("Hello2");
  if (elem) {
    console.log("not null");
  }
  var coords = elem.getBoundingClientRect();
  console.log("heelo3");
  return Math.abs(coords.top) <= coords.height;
};

// Click outside
const dropdownRef = ref(null);
onClickOutside(dropdownRef, (/*event*/) => {
  const el = document.getElementById("dropdown-div");

  if (el) {
    storeDropdown.clear();
  }
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

.nowrap {
  white-space: nowrap;
}

.dropdown-button {
  display: block;
  position: relative;
  margin: 0.2rem;
  border: 1px solid #ccc;
  /* box-shadow: 1px 2px 7px 1px; */

  border-radius: 0.3rem;
  /* font-size: 12px; */
  z-index: 1;

  /* transition: background-color 0.5s; */
}

/* .dropdown-button:hover {
  cursor: pointer;
  background-color: #ccc;
} */

.dropdown-content {
  position: relative;
  max-width: 455px; /* Allows for 50 characters */
  margin: 0.2rem;
  padding: 0.2rem;
  border-radius: 0.3rem;
  display: inline-block;
  width: max-content;
  border: 1px solid #ccc;
  /* box-sizing: border-box; */
  /* box-shadow: 1px 2px 7px 1px; */
  /* background-color: hsla(0, 0%, 100%, 0); */
  background-color: #fbfbfb;
}

.search-text {
  position: relative;
  display: block;
  margin: 0.3rem 0;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  min-width: 50px;
}

.select-all {
  position: relative;
  display: block;
  margin: 0.3rem 0;
  padding: 0 5rem;
  /* border: 1px solid #2b2d42; */
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  float: left;
  z-index: 1;
}

.select-all-cb {
  /* margin-right: 0.1rem; */
}

.clear-button {
  margin: 0.2rem;
  font-size: 12px;
  float: left;
}

.close-button {
  margin: 0.2rem;
  font-size: 12px;
  float: right;
}
.dropdown-list {
  position: relative;
  display: block;
  float: left;
  padding: 0;

  width: 100%;

  /* Scrolling in dropdown */
  max-height: 30rem; /* Maximum height of viewable content */
  overflow: hidden; /* Hides the overflow content */
  overflow-y: auto; /* Sets y scroll bars */

  border: 1px solid #ccc;
  border-radius: 0.3rem;
  /* width: max-content; */ /* Sets the width to the size of content */
  /* background-color: hsla(0, 0%, 100%, 0); */
}

.list-item {
  position: relative;
  display: block;
  padding: 0 0.3rem;
  width: 100%;
  background-color: white;
}

.list-item:hover,
.list-item:focus {
  cursor: pointer;
  background-color: #f0f0f0;
}

.list-item-cb {
  margin-right: 0.3rem;
}
/* .button-click-enter-active,
.button-click-leave-active {
  transition: opacity 5s ease-in-out;
}

.button-click-enter-from,
.button-click-leave-to {
  opacity: 0;
} */
</style>
