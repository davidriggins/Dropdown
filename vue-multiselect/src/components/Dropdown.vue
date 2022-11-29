<template>
  <div class="dropdown-list">
    <a class="btn btn-secondary" href="#"
      >{{ title }}
      <svg viewBox="0 0 1030 638" width="10">
        <path
          d="M1017 68L541 626q-11 12-26 12t-26-12L13 68Q-3 49 6 24.5T39 0h952q24 0 33 24.5t-7 43.5z"
          fill="#FFF"
        ></path></svg
    ></a>

    <transition name="fade" appear>
      <div class="list-items-div" v-if="isOpen">
        <ul class="list-items">
          <li
            class="list-item"
            v-for="(option, index) of filteredOptions"
            :key="index"
          >
            <span><input type="checkbox" /> option</span>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("Hello");
const isOpen = ref(true);
const filteredOptions = ref(["Hello1", "Hello2", "Hello3"]);
</script>

// Style Section //
<style scoped>
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

.list-items {
  padding: 0;
  margin: 0;
  border: 1px solid #2b2d42;
}
.list-item {
  list-style-type: none;
}

.list-item span {
  margin: 0.5rem;
}
.list-item span:hover {
  background-color: red;
}

.dropdown-list {
}
</style>
