<!--======================================================================
//========================================================================
// Template: QamMultiselectDropdownModal
//========================================================================
//========================================================================-->
<template>
  <QamButton class="qam-dropdown-button" @click="dropdownButtonClicked($event)"
    ><span class="qam-span-left">{{ buttonText }}</span
    ><span class="qam-span-right">&nbsp;&nbsp;⮟</span></QamButton
  >
  <div class="modal" role="dialog" aria-labelledby="modalTitle" ref="dropdownModalRef" aria-describedby="modalDescription">
    <section class="modal-body" id="modalDescription">
      <QamMultiselectDropdownContent :items="items" :buttonText="buttonText" :maxItemsShown="maxItemsShown" :useSearch="useSearch" :closeClicked="closeClicked"> </QamMultiselectDropdownContent>
    </section>
  </div>
</template>

<!--======================================================================
//========================================================================
// Script
//========================================================================
//========================================================================-->
<script setup>
//========================================================================
// Imports
//========================================================================
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import QamButton from "@/components/QamButton.vue";
import QamMultiselectDropdownContent from "@/components/QamMultiselectDropdownContent.vue";

//========================================================================
// Properties
//========================================================================
const props = defineProps({
  // Array of Strings to be displayed in the dropdown list
  items: { type: Array },
  // Text to be displayed on the dropdown button
  buttonText: { type: String, default: "Select Me" },
  // The maximum number of items to be visible in the dropdown.
  // The dropdown is scrollable
  maxItemsShown: { type: Number, default: 25 },
  // Boolean used to show or not show the Search input
  useSearch: { type: Boolean, default: true },
});

//========================================================================
// Store
//========================================================================

//========================================================================
// Reactive Variables
//========================================================================
const dropdownModalRef = ref(null);
const showModal = ref(false);

//========================================================================
// Emits
//========================================================================
// const emits = defineEmits("closeModal");

//========================================================================
// Computed
//========================================================================

//========================================================================
// Lifecycle Hooks
//========================================================================

//========================================================================
// Methods
//========================================================================
const dropdownButtonClicked = (e) => {
  showModal.value = !showModal.value;
  var element = e.target.parentElement;
  var type = element.tagName;
  console.log(type);

  for (var i = 0; i < 4; i++) {
    if (type != "TH") {
      element = element.parentElement;
      type = element.tagName;
    } else {
      break;
    }
  }
  var rect = element.getBoundingClientRect();

  var modal = document.querySelector(".modal");
  modal.style.left = rect.x + "px";
  modal.style.top = rect.y + rect.height + "px";
  console.log("parent: ", element);
  console.log("rect: ", rect);

  var classList = element.classList;
  console.log(classList);

  for (var j = 0; j < classList.length; j++) {
    console.log(classList[j]);
    if (classList[j] != null) {
      if (classList[j].includes("tf-")) {
        var value = classList[j].split("-");
        console.log("End value: ", value[2]);
      }
    }
  }

  var regex = /qam-tf-(\d*)/g;
  // var regex = new RegExp("qam-tf-(\\d*)/g")[1];
  console.log("Length: ", classList.length);
  for (var k = 0; k < classList.length; k++) {
    console.log("classList item: ", classList[k]);
    if (classList[k] != null) {
      if (classList[k].includes("tf-")) {
        var matches = regex.exec(classList[k]);
        if (matches) {
          var columnNum = matches[1];
          // var columnNum = classList[k].match(regex[1]);
          // var columnNum = classList[k].match(regex[1]);
          // console.log("columnNum size: ", columnNum.length);
          console.log("Regex num: ", columnNum);
        }
      }
    }
  }
  // var th = document.querySelector("");
};

const closeClicked = () => {
  console.log("Modal close was clicked");
  showModal.value = false;
};

onClickOutside(dropdownModalRef, (event) => {
  showModal.value = false;
  // emits("closeModal");
  console.log(event);
});
</script>

<!--======================================================================
//========================================================================
// Styles
//========================================================================
//========================================================================-->
<style scoped>
@import "@/assets/styles/multiselectDropdown.css";
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
}

.modal {
  background: #fff;
  /* box-shadow: 2px 2px 20px 1px; */
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  border-radius: 0.3rem;
  top: 40px;
}
.modal-body {
  position: relative;
  padding: 0;
}
</style>
