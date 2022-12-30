<template>
  <div>
    <ul>
      <li>
        <Button class="qam-first-last" @click="onClickFirstPage" :disabled="isInFirstPage">🢔🢔</Button>
      </li>
      <li>
        <Button class="qam-prev-next" @click="onClickPreviousPage" :disabled="isInFirstPage">Previous</Button>
      </li>
      <li v-for="page in pages" :key="page.name">
        <Button class="qam-page-button" @click="onClickPage(page.name)" :class="{ active: isPageActive(page.name) }" name="qam-page-button" :disabled="page.isDisabled">{{ page.name }}</Button>
      </li>
      <li>
        <Button class="qam-prev-next" @click="onClickNextPage" :disabled="isInLastPage">Next</Button>
      </li>
      <li>
        <Button class="qam-first-last" @click="onClickLastPage" :disabled="isInLastPage">🢖🢖</Button>
      </li>
      <li>
        <SimpleDropdown
          class="qam-tp-dropdown"
          :items="props.itemsPerPageOptions"
          :selectedItem="props.itemsPerPageOptions[1]"
          :buttonText="props.itemsPerPageOptions[1]"
          :keepSelectedAsText="true"
        ></SimpleDropdown>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import Button from "@/components/Button.vue";
import SimpleDropdown from "@/components/SimpleDropdown.vue";

//===============================================
//===============================================
const maxVisibleButtons = ref(5);

//===============================================

const props = defineProps({
  radius: { type: Number, default: 2 },
  totalPages: { type: Number, default: 240 },
  perPage: { type: Number, default: 100 },
  currentPage: { type: Number, default: 1 },
  itemsPerPageOptions: { type: Array, default: () => ["100", "200", "500", "1000"] },
});

onMounted(() => {
  maxVisibleButtons.value = props.radius * 2 + 1;
});

const startPage = computed(() => {
  // When on the first page
  // if (props.currentPage === 1) {
  //   return 1;
  // }
  if (props.currentPage <= props.radius) {
    return 1;
  }

  // When on the last page
  if (props.currentPage === props.totalPages) {
    const start = props.totalPages - (maxVisibleButtons.value - 1);

    if (start === 0) {
      return 1;
    } else {
      return start;
    }
  }

  // // When on the last page
  // if (props.currentPage === props.totalPages) {
  //   return props.totalPages - maxVisibleButtons.value;
  // }

  // When in-between
  console.log("Current page: ", props.currentPage);
  return props.currentPage - props.radius;
});

const pages = computed(() => {
  const range = [];

  for (let i = startPage.value; i <= Math.min(startPage.value + maxVisibleButtons.value - 1, props.totalPages); i++) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage,
    });
  }

  return range;
});

const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
});

const emits = defineEmits(["pagechanged"]);

// Methods

const isPageActive = (page) => {
  return props.currentPage === page;
};

const onClickFirstPage = () => {
  emits("pagechanged", 1);
};

const onClickPreviousPage = () => {
  emits("pagechanged", props.currentPage - 1);
};

const onClickPage = (page) => {
  emits("pagechanged", page);
};

const onClickNextPage = () => {
  emits("pagechanged", props.currentPage + 1);
};

const onClickLastPage = () => {
  emits("pagechanged", props.totalPages);
};
</script>

<style scoped>
div {
  border-radius: 0.3rem;
  border: 2px solid #ccc;
  width: max-content;
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

Button {
  margin: 0.3rem 0;
}

.qam-page-button {
  width: 2.5rem;
}

.qam-prev-next {
  width: 4rem;
}
.qam-not-current {
  color: #000;
}
.active {
  color: #00f;
  border: 2px solid #00f;
}

.qam-tp-dropdown {
  display: inline-block;
  margin: 0 0.3rem 0 1rem;
}
</style>
