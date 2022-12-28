<template>
  <div>
    <ul>
      <li>
        <Button class="qam-previous" :disabled="prevDisabled">Previous</Button>
      </li>
      <li v-for="index in numberOfButtons" :key="index">
        <Button
          class="qam-page-button"
          name="qam-page-button"
          :class="centerNumber == buttonNumbers[index - 1] ? 'activeButton' : 'inactiveButton'"
          @click="pageButtonClicked(buttonNumbers[index - 1], $event)"
          >{{ buttonNumbers[index - 1] }}</Button
        >
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
const numberOfButtons = ref(0);
const buttonNumbers = ref([]);
const currentPage = ref(1);
const prevDisabled = ref(true);
const nextDisabled = ref(false);
const numberOfPages = ref(1);
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
  numberOfButtons.value = props.radius * 2 + 1;
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
  // setActiveButton(currentPage.value);
});

const pageButtonClicked = (page, event) => {
  // console.log(page);
  console.log("===================================================");
  console.log("Page: ", page);
  console.log("Target textContent: ", event.target.textContent);
  console.log("CenterNumber: ", centerNumber.value);
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
  numberOfPages.value = Math.ceil(props.totalItems / itemsPerPage.value);
  if (currentPage.value > numberOfPages.value - 1) {
    nextDisabled.value = true;
  }

  checkPreviousAndNext();
};

const setButtonNumbers = () => {
  for (var i = 0; i < numberOfButtons.value; i++) {
    buttonNumbers.value[i] = i + startNumber.value;
  }
};

const shiftButtonNumbers = () => {
  console.log("Shift buttons numbers.");

  // If the current selected page and the current center number
  // are the same, don't shift.
  if (centerNumber.value === currentPage.value) {
    return;
  }

  // Clear the button numbers array
  buttonNumbers.value = [];

  // If the center number is greater than the current page selected,
  // then we are descending. Set the button numbers...
  if (centerNumber.value > currentPage.value) {
    // Get the delta between the two values
    let delta = centerNumber.value - currentPage.value;

    // If the current starting number minus the delta is <=1, then
    // we need the start number to be 1.
    // Center number is the radius + 1.
    // Start number is 1.
    // Set the button number values.
    if (startNumber.value - delta <= 1) {
      centerNumber.value = props.radius + 1;
      startNumber.value = 1;
      for (var i = 0; i < numberOfButtons.value; i++) {
        buttonNumbers.value[i] = i + startNumber.value;
      }
    }
    // Otherwise, the starting number minus the delta > 1.
    // We are not at the beginning of the range.
    // Subtract delta from the starting and center numbers.
    // Set the button number values.
    else {
      startNumber.value -= delta;
      centerNumber.value -= delta;
      for (var j = 0; j < numberOfButtons.value; j++) {
        buttonNumbers.value[j] = j + startNumber.value;
      }
    }

    // Otherwise, we are ascending. Set the button numbers.
    // Determine the delta and set the values accordingly.
  } else {
    let delta = currentPage.value - centerNumber.value;
    startNumber.value += delta;
    for (var k = 0; k < numberOfButtons.value; k++) {
      buttonNumbers.value[k] = k + startNumber.value;
    }
    centerNumber.value = currentPage.value;
  }
};

const setActiveButton = (activeNumber) => {
  // console.log("IN setActiveButton");
  // console.log("setActiveButton: activeNumber = ", activeNumber);
  // Remove all active items
  var activeItems = document.getElementsByClassName("qam-current");
  for (var i = 0; i < activeItems.length; i++) {
    // console.log("setActiveButton: remove class from item = ", i);
    activeItems[i].classList.remove("qam-current");
  }

  var pageButtons = document.getElementsByClassName("qam-page-button");
  for (var j = 0; j < pageButtons.length; j++) {
    // console.log("setActiveButton: textContent = ", pageButtons[j].textContent);
    if (pageButtons[j].textContent == activeNumber) {
      // console.log("setActiveButton: add class to item = ", j);
      pageButtons[j].classList.add("qam-current");
    }
  }

  // el.classList.add("qam-current");
};
const checkPreviousAndNext = () => {
  var center = props.radius + 1;
  if (currentPage.value <= center) {
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
