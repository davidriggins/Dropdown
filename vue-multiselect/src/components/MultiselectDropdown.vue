<template>
  <div class="qam-outer-div" ref="qam_dropdownRef">
    <Button class="qam-dropdown-button" @click="dropdownButtonClicked">{{ buttonText }}</Button>
    <div class="qam-dropdown-content" id="qam-dropdown-div" v-if="show">
      <input v-if="props.useSearch" type="text" placeholder="Search" v-model="input" class="qam-search-text qam-list-item" v-autofocus />
      <Button @click="clearAll" class="qam-clear-button">Clear All</Button>
      <Button @click="closeButton" class="qam-close-button">Close</Button>

      <br />
      <label class="qam-select-all qam-list-item"> <input type="checkbox" class="qam-select-all-cb" name="qam-select-all" @click="toggleSelectAll" /> {{ selectAllText }} </label>

      <br />
      <div class="qam-dropdown-list">
        <span class="qam-nowrap"
          ><label v-for="(option, index) in filteredList()" :key="index" class="qam-list-item">
            <input type="checkbox" name="qam-checkbox-item" class="qam-list-item-cb" @click="toggleCheckbox" />{{ option }}
          </label>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { vAutofocus } from "@/directives/vAutofocus";
import Button from "@/components/Button.vue";

onMounted(() => {});

const props = defineProps({
  items: {
    type: Array,
  },
  buttonText: {
    type: String,
    default: "Select Me",
  },
  maxItemsShown: {
    type: Number,
    default: 25,
  },
  useSearch: {
    type: Boolean,
    default: true,
  },
});

const show = ref(false);
const input = ref("");
const selectAllText = ref("Select All");
const checkboxesChecked = ref([]);

const filteredList = () => {
  if (props.items.filter((option) => option.toLowerCase().includes(input.value.toLowerCase())).length > props.maxItemsShown) {
    return [];
  }

  return props.items.filter((option) => option.toLowerCase().includes(input.value.toLowerCase()));
};
const clearAll = () => {
  clear();
};

const clear = () => {
  var checkboxes = document.getElementsByName("qam-checkbox-item");
  var selectAll = document.getElementsByName("qam-select-all");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkboxes[i].checked = false;
    }
  }

  checkboxesChecked.value.length = 0;

  if (selectAll[0].checked) {
    selectAll[0].checked = false;
  }

  input.value = "";
  selectAllText.value = "Select All";
};

const closeButton = () => {
  console.log("Close button checked");
  console.log(checkboxesChecked);
  clear();
  show.value = false;
};

const toggleSelectAll = (e) => {
  checkboxesChecked.value.length = 0;
  var checkboxes = document.getElementsByName("qam-checkbox-item");

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] != e.target) {
      checkboxes[i].checked = e.target.checked;
      if (checkboxes[i].checked) {
        var label = checkboxes[i].parentElement.textContent.trim();
        checkboxesChecked.value.push(label);
      }
    }
  }

  if (e.target.checked) {
    selectAllText.value = "Deselect All";
  } else {
    selectAllText.value = "Select All";
  }
};

const toggleCheckbox = () => {
  var checkboxes = document.getElementsByName("qam-checkbox-item");
  var selectAll = document.getElementsByName("qam-select-all");
  checkboxesChecked.value.length = 0;
  let count = 0;

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      var label = checkboxes[i].parentElement.textContent.trim();
      checkboxesChecked.value.push(label);
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

// Click outside
const qam_dropdownRef = ref(null);
onClickOutside(qam_dropdownRef, (/*event*/) => {
  const el = document.getElementById("qam-dropdown-div");

  if (el) {
    clear();
  }
  show.value = false;
});

// const filteredList = () => {
//   console.log(props.items);
//   if (props.items.filter((option) => option.toLowerCase().includes(input.value.toLowerCase())).length > props.maxItemsShown) {
//     return [];
//   }

//   return this.items.filter((option) => option.toLowerCase().includes(this.input.toLowerCase()));
// };

const dropdownButtonClicked = () => {
  show.value = !show.value;
};
</script>

<style scoped>
@import "@/assets/styles/multiselectDropdown.css";
</style>
