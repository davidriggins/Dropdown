<template>
  <div class="outer-div">
    <input type="button" class="input-button" :value="title" style="padding: 0.3rem" @click="openClose('myselect')" />
    <div class="dropdown-list">
      <!-- <button>
      {{ title }}
      <svg viewBox="0 0 1030 638" width="10">
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
      </svg>
    </button> -->

      <div class="list-items-div invisible" id="myselect">
        <p class="select-all list-item">
          <label class="label-item"><input type="checkbox" class="checkbox-item" />Select All</label>
        </p>
        <p class="list-item" v-for="(option, index) in filteredOptions" :key="index">
          <label class="label-item"> <input type="checkbox" class="checkbox-item" />{{ option }} </label>
        </p>
      </div>

      <!-- <transition name="fade" appear>
      <div class="list-items-div invisible" id="myselect">
        <p class="list-item" v-for="(option, index) in filteredOptions" :key="index">
          <label><input type="checkbox" />{{ option }} </label>
        </p>
      </div>
    </transition> -->
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

const isOpen = ref(true);
const filteredOptions = ref(["Hello1", "HelloHelloHelloHello", "Hello3"]);

const openClose = (id) => {
  let element = document.getElementById(id);
  if (element.className.indexOf("invisible") >= 0) {
    element.classList.remove("invisible");
  } else {
    element.classList.add("invisible");
  }
};
</script>

<style scoped>
/* 
  style section =============================================
*/
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.input-button value {
}

a {
  /* background: #8d99ae; */
  /* color: inherit; */
  text-decoration: none;
  padding: 0.5rem;
  border: 1px solid #2b2d42;
  border-radius: 0.3rem;
}

a svg {
  width: 10px;
  margin-left: 10px;
}

.input-button {
  display: inline-block;
  margin: 0.2rem;
}

.dropdown-list {
  max-width: 600px;
  margin: 0.2rem;
  border-radius: 0.3rem;
}

.select-all {
}

.list-items-div {
  list-style-type: none;
  padding: 0;
  margin-top: 2px;
  border: 1px solid #2b2d42;
  max-height: 24rem;

  overflow: hidden;
  overflow-y: auto;
  border-radius: 0.3rem;
  width: max-content;
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

.invisible {
  display: none;
}
</style>
