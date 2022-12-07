<template>
  <div class="outer-div">
    <input type="button" class="input-button" :value="title" style="padding: 0.3rem" @click="show = !show" />

    <div class="dropdown-list">
      <!-- <button>
      {{ title }}
      <svg viewBox="0 0 1030 638" width="10">
        <path d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z" fill="#FFF"></path>
      </svg>
    </button> -->
      <transition name="fade">
        <div class="list-items-div" v-if="show" id="myselect">
          <p class="select-all list-item">
            <label class="label-item"><input type="checkbox" class="checkbox-item" name="select-all" @click="toggle($event)" />Select All</label>
          </p>
          <p class="list-item" v-for="(option, index) in filteredOptions" :key="index">
            <label class="label-item"> <input type="checkbox" name="checkbox-item" class="checkbox-item" @click="inspectCheckAll($event)" />{{ option }} </label>
          </p>
        </div>

        <!-- <transition name="fade" appear>
      <div class="list-items-div invisible" id="myselect">
        <p class="list-item" v-for="(option, index) in filteredOptions" :key="index">
          <label><input type="checkbox" />{{ option }} </label>
        </p>
      </div>
    </transition> -->
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

const openClose = (id) => {
  let element = document.getElementById(id);
  if (element.className.indexOf("invisible") >= 0) {
    element.classList.remove("invisible");
  } else {
    element.classList.add("invisible");
  }
};

const toggle = (e) => {
  var checkboxes = document.getElementsByName("checkbox-item");
  // var count = 0;
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] != e.target) {
      checkboxes[i].checked = e.target.checked;
      if (checkboxes[i].checked) {
        // count++;
      }
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

.input-button {
  z-index: 1;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* .slide-fade-enter-active {
  transition: all 1s;
} */

/* .slide-fade-enter-active {
  transition: all 0.3s ease-out;
} */

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}

.slide-enter-to {
  position: absolute;
  bottom: 100%;
}

.slide-enter-from {
  position: absolute;
  bottom: -100%;
}
/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
} */

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.75s ease-in-out;
}

.slide-fade-enter-to {
  position: absolute;
  bottom: 100%;
}

.slide-fade-enter-from {
  position: absolute;
  bottom: -100%;
  opacity: 0;
}
</style>
