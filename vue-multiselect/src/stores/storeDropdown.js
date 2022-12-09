import { defineStore } from "pinia";

export const useStoreDropdown = defineStore("storeDropdown", {
  state: () => {
    return {
      optionsList: [
        "Hello1",
        "HelloHelloHelloHello",
        "Hello3",
        "Hello4",
        "Hello5",
        "Hello6",
        "Hello7",
        "Hello8",
        "Hello9",
        "Hello10",
        "Hello11",
        "Hello12",
        "Hello13",
        "Hello14",
        "Hello15",
        "Hello16",
        "Hello17",
        "Hello18",
        "Hello19",
        "Hello20",
        "Hello21",
        "Hello22",
      ],
      show: false,
      selectAllText: "Select All",
    };
  },
  actions: {
    toggleDropdown() {
      this.show = !this.show;
    },
    toggleCheckbox(e) {
      var checkboxes = document.getElementsByName("checkbox-item");

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != e.target) {
          checkboxes[i].checked = e.target.checked;
        }
      }

      if (e.target.checked) {
        this.selectAllText = "Deselect All";
      } else {
        this.selectAllText = "Select All";
      }
    },

    inspectCheckAll() {
      var checkboxes = document.getElementsByName("checkbox-item");
      var selectAll = document.getElementsByName("select-all");
      var count = 0;

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          count++;
        }
      }

      if (count === checkboxes.length) {
        selectAll[0].checked = true;
        this.selectAllText = "Deselect All";
      }

      if (count < checkboxes.length) {
        selectAll[0].checked = false;
        this.selectAllText = "Select All";
      }
    },
  },
  getters: {},
});
