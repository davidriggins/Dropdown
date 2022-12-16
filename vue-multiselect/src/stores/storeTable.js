import { defineStore } from "pinia";

export const useStoreTable = defineStore("storeTable", {
  state: () => {
    return {
      checkboxesChecked: [],
    };
  },

  actions: {
    toggleCheckboxes(e) {
      this.checkboxesChecked.length = 0;
      var checkboxes = document.getElementsByClassName("qam-checkbox");

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != e.target) {
          checkboxes[i].checked = e.target.checked;
          if (checkboxes[i].checked) {
            this.checkboxesChecked.push(i);
          }
        }
      }
    },

    toggleCheckbox() {
      var checkboxes = document.getElementsByClassName("qam-checkbox");
      var toggler = document.getElementsByClassName("qam-checkbox-toggle");
      this.checkboxesChecked.length = 0;
      var count = 0;

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          this.checkboxesChecked.push(i);
          count++;
        }
      }

      if (count === checkboxes.length) {
        toggler[0].checked = true;
      }

      if (count < checkboxes.length) {
        toggler[0].checked = false;
      }
    },
  },
  getters: {},
});
