<template>
  <div class="outer-div" ref="dropdownRef">
    <transition name="button-click">
      <input type="button" class="input-button" :value="title" style="padding: 0.3rem" @click="toggleDropdown" />
    </transition>
    <transition name="fade">
      <div class="dropdown-content" v-if="show">
        <label class="select-all list-item"> <input type="checkbox" class="select-all" name="select-all" @click="toggle($event)" />{{ selectAllText }} </label>

        <div class="dropdown-list">
          <label v-for="(option, index) in filteredOptions" :key="index" class="list-item"> <input type="checkbox" name="checkbox-item" @click="inspectCheckAll()" />{{ option }} </label>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
/*
  script section =============================================
*/
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

var title = ref("This is a dropdown");
title.value = title.value += "  ⮟";

var show = ref(false);
var selectAllText = ref("Select All");

const filteredOptions = ref([
  "Hello1",
  "HelloHelloHelloHello",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
  "Hello3",
]);

const toggleDropdown = () => {
  show.value = !show.value;
};

const toggle = (e) => {
  var checkboxes = document.getElementsByName("checkbox-item");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] != e.target) {
      checkboxes[i].checked = e.target.checked;
    }
  }

  if (e.target.checked) {
    selectAllText.value = "Deselect All";
  } else {
    selectAllText.value = "Select All";
  }
};

const inspectCheckAll = () => {
  var checkboxes = document.getElementsByName("checkbox-item");
  var selectAll = document.getElementsByName("select-all");
  var count = 0;

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      count++;
    }
  }

  if (count === checkboxes.length) {
    selectAll[0].checked = true;
    selectAllText.value = "Deselect All";
  }

  if (count < checkboxes.length) {
    selectAll[0].checked = false;
    selectAllText.value = "Select All";
  }
};

const dropdownRef = ref(null);

onClickOutside(dropdownRef, (event) => {
  show.value = false;
});
</script>

<style scoped>
/* 
  style section =============================================
*/

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
}

.outer-div {
  width: max-content;
}

.input-button {
  display: inline-block;
  margin: 0.2rem;
  border: 1px solid #ccc;

  border-radius: 0.3rem;

  box-shadow: 2px 2px 10px 1px;
  z-index: 1; /* Puts item on top */

  transition: background-color 0.5s;
}

.input-button:hover {
  cursor: pointer;
  background-color: #ccc;
}

.dropdown-content {
  max-width: 600px;
  margin: 0.2rem;
  border-radius: 0.3rem;
  display: block;
  width: max-content;
  box-sizing: border-box;
  box-shadow: 2px 2px 10px 1px;
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
  max-height: 24rem; /* Maximum height of viewable content */
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
