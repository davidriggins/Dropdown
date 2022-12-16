<template>
  <div class="outer-div" ref="dropdownRef">
    <Button class="dropdown-button" @click="storeDropdown.toggleDropdown">{{ buttonText }}</Button>

    <div class="dropdown-content" id="dropdown-div" v-if="storeDropdown.show">
      <input v-if="props.useSearch" type="text" placeholder="Search" v-model="storeDropdown.input" class="search-text list-item" v-autofocus />
      <Button @click="clearAll" class="clear-button">Clear All</Button>
      <Button @click="closeButton" class="close-button">Close</Button>

      <br />
      <label class="select-all list-item"> <input type="checkbox" class="select-all-cb" name="select-all" @click="storeDropdown.toggleSelectAll" /> {{ storeDropdown.selectAllText }} </label>

      <br />
      <div class="dropdown-list">
        <span class="nowrap"
          ><label v-for="(option, index) in storeDropdown.filteredList()" :key="index" class="list-item">
            <input type="checkbox" name="checkbox-item" class="list-item-cb" @click="storeDropdown.toggleCheckbox" />{{ option }}
          </label>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
/*========================================================================
  script section
  ========================================================================*/
import { onMounted, ref } from "vue";
import { useStoreDropdown } from "@/stores/storeDropdown";
import { onClickOutside } from "@vueuse/core";
import { vAutofocus } from "@/directives/vAutofocus";
import Button from "@/components/Button.vue";

onMounted(() => {});

const props = defineProps({
  useSearch: {
    type: Boolean,
    default: true,
  },
});

// Store
const storeDropdown = useStoreDropdown();

// Dropdown button content
var buttonText = ref("This is my dropdown");
buttonText.value = buttonText.value += "  ⮟";

const clearAll = () => {
  storeDropdown.clear();
};

const closeButton = () => {
  console.log("Close button checked");
  console.log(storeDropdown.checkboxesChecked);
  storeDropdown.clear();
  storeDropdown.show = false;
};

// Click outside
const dropdownRef = ref(null);
onClickOutside(dropdownRef, (/*event*/) => {
  const el = document.getElementById("dropdown-div");

  if (el) {
    storeDropdown.clear();
  }
  storeDropdown.show = false;
});
</script>

<style scoped>
/*========================================================================
  style section
  ========================================================================*/
@import "@/assets/styles/project.css";
@import "@/assets/styles/dropdown.css";
</style>
