<template>
  <transition name="button-click">
    <button class="btn-sm qam-button">
      <slot />
    </button>
  </transition>
</template>

<script setup>
import { onBeforeMount } from "vue";

// const props = defineProps({
//   buttonText: {
//     type: String,
//   },
// });

onBeforeMount(() => {});
</script>

<style scoped>
button {
  display: inline-block;
  margin: 0 rem;
  padding: 0.2rem 0.4rem;

  border: 1px solid #ccc;
  border-radius: 0.3rem;
  background-color: #eee;

  /* box-shadow: 2px 2px 10px 1px; */
  /* transition: background-color 0.5s; */
}

button:visited {
}

button:hover {
  cursor: pointer;
  filter: brightness(90%);
}

button:focus {
  cursor: pointer;
}

button:active {
  border: 2px double #0000ff;
  color: #00f;
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
