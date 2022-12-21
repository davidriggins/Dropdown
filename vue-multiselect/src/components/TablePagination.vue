<template>
  <div>
    <ul>
      <li>
        <Button class="qam-previous" :disabled="prevDisabled">Previous</Button>
      </li>
      <li v-for="index in items" :key="index">
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
import { onMounted, ref } from "vue";
import Button from "@/components/Button.vue";
import SimpleDropdown from "@/components/SimpleDropdown.vue";

const radius = ref(2);
const items = ref(0);
const buttonNumbers = ref([]);
const currentPage = ref(1);
const prevDisabled = ref(true);
const nextDisabled = ref(false);

const props = defineProps({
  pages: { type: Array },
  itemsPerPage: { type: Number },
  totalItems: { type: Number },
  itemsPerPageOptions: { type: Array },
});

onMounted(() => {
  items.value = radius.value * 2 + 1;
  for (var i = 0; i < items.value; i++) {
    buttonNumbers.value[i] = i + 1;
  }

  // checkPreviousAndNext();
});

const pageButtonClicked = (page, event) => {
  // console.log(page);
  console.log(event.target.textContent);
  currentPage.value = page;
  checkPreviousAndNext();
};

const checkPreviousAndNext = () => {
  var pageButtons = document.getElementsByClassName("qam-page-button");
  for (var i = 0; i < pageButtons.length; i++) {
    if (currentPage.value == pageButtons[i].textContent) {
      var activeItems = document.getElementsByClassName("qam-current");
      for (var j = 0; j < activeItems.length; j++) {
        activeItems[j].classList.remove("qam-current");
      }
      pageButtons[i].classList.add("qam-current");
    }
  }
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
