<template>
  <div>
    <ul>
      <li>
        <Button class="qam-previous" :disabled="prevDisabled">Previous</Button>
      </li>
      <li v-for="index in numButtons" :key="index">
        <Button class="qam-page-button" name="qam-page-button" @click="pageButtonClicked(buttonNumbers[index - 1], $event)">{{ buttonNumbers[index - 1] }}</Button>
      </li>
      <li>
        <Button class="qam-next" :disabled="nextDisabled">Next</Button>
      </li>
    </ul>
    <SimpleDropdown class="qam-tp-dropdown"></SimpleDropdown>
  </div>
</template>

<script setup>
import { nextTick, onMounted, onUpdated, ref } from "vue";
import Button from "@/components/Button.vue";
import SimpleDropdown from "@/components/SimpleDropdown.vue";

// const radius = ref(2);
const numButtons = ref(0);
const buttonNumbers = ref([]);
const currentPage = ref(1);
const prevDisabled = ref(true);
const nextDisabled = ref(false);
const numPages = ref(1);
const itemsPerPage = ref(5);
const centerNumber = ref(3);
const startNumber = ref(1);

const props = defineProps({
  pages: { type: Array },
  // itemsPerPage: { type: Number, default: 5 },
  radius: { type: Number, default: 2 },
  totalItems: { type: Number, default: 240 },
  itemsPerPageOptions: { type: Array },
});

onMounted(() => {
  numButtons.value = props.radius * 2 + 1;
  startNumber.value = 1;
  centerNumber.value = props.radius + 1;
  setButtonNumbers();

  // nextTick();
  currentPage.value = 1;
  setActiveButton(startNumber.value);
  // checkPreviousAndNext();
});

onUpdated(() => {
  console.log("IN onUpdated");
  setActiveButton(currentPage.value);
});

const pageButtonClicked = (page, event) => {
  // console.log(page);
  console.log("Page: ", page);
  console.log("Target textContent: ", event.target.textContent);
  currentPage.value = page;
  if (centerNumber.value != page) {
    console.log("Shift numbers");
    shiftButtonNumbers();
    setButtonNumbers();
    setActiveButton(page);
  } else {
    setButtonNumbers();
  }
  // centerNumber.value = page;
  numPages.value = Math.ceil(props.totalItems / itemsPerPage.value);
  if (currentPage.value > numPages.value - 1) {
    nextDisabled.value = true;
  }

  checkPreviousAndNext();
};

const setButtonNumbers = () => {
  for (var i = 0; i < numButtons.value; i++) {
    buttonNumbers.value[i] = i + startNumber.value;
  }
};

const shiftButtonNumbers = () => {
  console.log("Shift buttons numbers.");
  if (centerNumber.value === currentPage.value) {
    return;
  }
  buttonNumbers.value = [];
  if (centerNumber.value > currentPage.value) {
    let delta = currentPage.value - centerNumber.value;
    if (startNumber.value - delta <= 1) {
      centerNumber.value = props.radius + 1;
      startNumber.value = 1;
      for (var i = 0; i < numButtons.value; i++) {
        buttonNumbers.value[i] = i + startNumber.value;
      }
    }
  } else {
    let delta = currentPage.value - centerNumber.value;
    console.log("Delta: ", delta);
    startNumber.value += delta;
    console.log("Start Num: ", startNumber.value);
    for (var j = 0; j < numButtons.value; j++) {
      buttonNumbers.value[j] = j + startNumber.value;
    }
    centerNumber.value = currentPage.value;
    console.log("Center number: ", centerNumber.value);
  }
};

const setActiveButton = (activeNumber) => {
  console.log("IN setActiveButton");
  console.log("setActiveButton: activeNumber = ", activeNumber);
  // Remove all active items
  var activeItems = document.getElementsByClassName("qam-current");
  for (var i = 0; i < activeItems.length; i++) {
    console.log("setActiveButton: remove class from item = ", i);
    activeItems[i].classList.remove("qam-current");
  }

  var pageButtons = document.getElementsByClassName("qam-page-button");
  for (var j = 0; j < pageButtons.length; j++) {
    console.log("setActiveButton: textContent = ", pageButtons[j].textContent);
    if (pageButtons[j].textContent == activeNumber) {
      console.log("setActiveButton: add class to item = ", j);
      pageButtons[j].classList.add("qam-current");
    }
  }

  // el.classList.add("qam-current");
};
const checkPreviousAndNext = () => {
  if (currentPage.value === 1) {
    prevDisabled.value = true;
  } else {
    prevDisabled.value = false;
  }
};
</script>

<style scoped>
div {
  border-radius: 0.3rem;
  border: 2px solid #ccc;
}

li {
  display: inline-block;
  margin: 0 0.2rem;
  padding: 0 0;
}

ul {
  display: inline-block;
  margin: 0;
  padding: 0;
  /* width: 100%; */
}

.qam-page-button {
}

.qam-not-current {
  color: #000;
}
.qam-current {
  color: #00f;
  border: 2px solid #00f;
}
/* .qam-tp-dropdown {
  display: inline-block;
} */
</style>
