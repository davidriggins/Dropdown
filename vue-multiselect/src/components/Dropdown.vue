<template>
  <div class="outer-div">
    <input type="button" class="input-button" :value="title" style="padding: 0.3rem" @click="show = !show" />

    <div class="dropdown-list">
      <transition name="fade">
        <div class="list-items-div" v-if="show" @focus="handleFocus" @focusout="handleFocusOut" tabindex="0" id="myselect">
          <p class="select-all list-item">
            <label class="label-item"><input type="checkbox" class="checkbox-item" name="select-all" @click="toggle($event)" />Select All</label>
          </p>
          <p class="list-item" v-for="(option, index) in filteredOptions" :key="index">
            <label class="label-item"> <input type="checkbox" name="checkbox-item" class="checkbox-item" @click="inspectCheckAll($event)" />{{ option }} </label>
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
/*
  script section =============================================
*/
import { ref } from "vue";

var title = ref("This is a dropdown");
title.value = title.value += " ⮟";

var show = ref(false);

const filteredOptions = ref(["Hello1", "HelloHelloHelloHello", "Hello3"]);

const toggle = (e) => {
  var checkboxes = document.getElementsByName("checkbox-item");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] != e.target) {
      checkboxes[i].checked = e.target.checked;
    }
  }
};

const inspectCheckAll = (e) => {
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
  }

  if (count < checkboxes.length) {
    selectAll[0].checked = false;
  }
};

const handleFocus = () => {
  show.value = true;
};

const handleFocusOut = () => {
  console.log("focus out");
  show.value = false;
};
</script>

<style scoped>
/* 
  style section =============================================
*/

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.input-button {
  display: inline-block;
  margin: 0.2rem;
  z-index: 1; /* Puts item on top */
}

.dropdown-list {
  max-width: 600px;
  margin: 0.2rem;
  border-radius: 0.3rem;
}

.list-items-div {
  list-style-type: none;
  padding: 0;
  margin-top: 2px;
  border: 1px solid #2b2d42;

  /* Scrolling in dropdown */
  max-height: 24rem; /* Maximum height of viewable content */
  overflow: hidden; /* Hides the overflow content */
  overflow-y: auto; /* Sets y scroll bars */

  border-radius: 0.3rem;
  width: max-content; /* Sets the width to the size of content */
}

.label-item {
  display: block;
}

.list-item:hover,
.list-item:focus {
  cursor: pointer;
  background-color: red;
}

.list-item {
  padding: 0 0.3rem;
}

.list-item input {
  margin: 0 0.3rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
