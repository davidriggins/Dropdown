<template>
  <div class="outer-div">
    <input type="button" class="input-button" :value="title" style="padding: 0.3rem" @click="show = !show" />

    <transition name="fade">
      <div class="dropdown-content" v-if="show">
        <p class="select-all list-item">
          <label class="label-item checkbox-item"> <input type="checkbox" class="checkbox-item select-all" name="select-all" @click="toggle($event)" />{{ selectAllText }} </label>
        </p>
        <div class="dropdown-list">
          <p class="list-item" v-for="(option, index) in filteredOptions" :key="index">
            <label class="label-item"> <input type="checkbox" name="checkbox-item" class="checkbox-item" @click="inspectCheckAll()" />{{ option }} </label>
          </p>
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

var title = ref("This is a dropdown");
title.value = title.value += " ⮟";

var show = ref(false);
var selectAllText = ref("Select All");

const filteredOptions = ref(["Hello1", "HelloHelloHelloHello", "Hello3"]);

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
  /* box-shadow: 2px 2px 20px 1px; */
  z-index: 1; /* Puts item on top */
}

.dropdown-content {
  max-width: 600px;
  margin: 0.2rem;
  border-radius: 0.3rem;
  /* box-shadow: 2px 2px 20px 1px; */
  display: block;
  width: max-content;
}

.select-all {
  margin: 0.3rem 0;
  border: 1px solid #2b2d42;
  border-radius: 0.3rem;
}
.dropdown-list {
  /* list-style-type: none; */
  padding: 0;
  /* margin-top: 2px; */

  /* Scrolling in dropdown */
  max-height: 24rem; /* Maximum height of viewable content */
  overflow: hidden; /* Hides the overflow content */
  overflow-y: auto; /* Sets y scroll bars */

  border: 1px solid #2b2d42;
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

.list-item input {
  margin: 0 0.3rem;
}

.label-item:hover,
.label-item:focus {
  cursor: pointer;
  background-color: #f0f0f0;
}
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>
