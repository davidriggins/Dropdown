import { defineStore } from "pinia";

export const useStoreDropdown = defineStore("storeDropdown", {
  state: () => {
    return {
      optionsList: [
        "Hello1",
        "12345678911234567892123456789312345678941234567895123456789612345678971234567898",
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
        "Hello23",
        "Hello24",
      ],
      show: false,
      selectAllText: "Select All",
      checkboxesChecked: [],
      input: "",
    };
  },
  actions: {
    toggleDropdown() {
      this.show = !this.show;
    },
    toggleSelectAll(e) {
      this.checkboxesChecked.length = 0;
      var checkboxes = document.getElementsByName("checkbox-item");
      this.checkboxesChecked.length = 0;

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != e.target) {
          checkboxes[i].checked = e.target.checked;
          if (checkboxes[i].checked) {
            var label = checkboxes[i].parentElement.textContent.trim();
            this.checkboxesChecked.push(label);
          }
        }
      }

      if (e.target.checked) {
        this.selectAllText = "Deselect All";
      } else {
        this.selectAllText = "Select All";
      }
    },

    toggleCheckbox() {
      var checkboxes = document.getElementsByName("checkbox-item");
      var selectAll = document.getElementsByName("select-all");
      this.checkboxesChecked.length = 0;
      var count = 0;

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          var label = checkboxes[i].parentElement.textContent.trim();
          this.checkboxesChecked.push(label);
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

    filteredList() {
      return this.optionsList.filter((option) => option.toLowerCase().includes(this.input.toLowerCase()));
    },

    clear() {
      var checkboxes = document.getElementsByName("checkbox-item");
      var selectAll = document.getElementsByName("select-all");

      for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          checkboxes[i].checked = false;
        }
      }

      this.checkboxesChecked.length = 0;

      if (selectAll[0].checked) {
        selectAll[0].checked = false;
      }

      this.input = "";
    },
  },
  getters: {},
});
