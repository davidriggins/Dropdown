<template>
  <div class="qam-simple-dropdown">
    <Button @click="toggleDropdown" class="qam-simple-dropdown-button">
      {{ buttonLabel + "  ⮟" }}
    </Button>
    <ul v-if="show" class="qam-simple-dropdown-content">
      <li v-for="(item, index) in items" :key="index" @click="itemWasSelected(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Button from "@/components/Button.vue";

const props = defineProps({
  // The list of items in the dropdown.
  items: {
    type: Array,
  },

  // The (original) button text you want.
  buttonText: {
    type: String,
    default: "Select",
  },

  // Keep the selected value as the button text.
  keepSelectedAsText: {
    type: Boolean,
    default: false,
  },
});

// const slots = useSlots();
// const slotText = computed(() => {
//   return slots.default()[0].children;
// });

const show = ref(false);
const buttonLabel = ref("");
const itemSelected = ref("");
// const list = ref(["5", "10", "25", "100", "200"]);
// const buttonText = ref("Select");

onMounted(() => {
  buttonLabel.value = props.buttonText;
});

const toggleDropdown = () => {
  show.value = !show.value;
};

const itemWasSelected = (item) => {
  show.value = !show.value;
  itemSelected.value = item;

  if (props.keepSelectedAsText) {
    buttonLabel.value = item;
  }
  console.log("Item selected: ", item);
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  font-weight: normal;
}

Button {
  cursor: pointer;
  min-width: 50px;
}

div {
  margin: 0;
  position: relative;
  display: inline-block;
}

ul {
  display: block;
  position: absolute;
  margin: 0;
  padding: 0;
  /* width: fit-content; */
  width: 100%;

  /* Scrolling in dropdown */
  max-height: 30rem; /* Maximum height of viewable content */
  overflow: hidden; /* Hides the overflow content */
  overflow-y: auto; /* Sets y scroll bars */
  z-index: 1;
}

li {
  list-style-type: none;
  margin: 0;
  padding: 0 0.3rem;
  width: 100%;
  display: block;
  z-index: 1;
  border: 2px solid #fff;
}

li:hover {
  background-color: #ccc;
}

li:active {
  border: 2px solid #00f;
}

/* .qam-simple-dropdown {
  display: inline-block;
} */
</style>
