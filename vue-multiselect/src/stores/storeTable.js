import { defineStore } from "pinia";
import { orderBy, sortBy, where } from "lodash";

export const useStoreTable = defineStore("storeTable", {
  state: () => {
    return {
      fields: ["Checkbox", "Session ID", "Publish Time", "ArcGIS", "Build", "Product", "OS Version"],

      data: [
        { Checkbox: "Checkbox", "Session ID": "23", "Publish Time": "12/31/21 05:31 PM", ArcGIS: "11.1", Build: "41238", Product: "Server", "OS Version": "Win10(1809)" },
        { Checkbox: "Checkbox", "Session ID": "24", "Publish Time": "12/30/21 05:31 AM", ArcGIS: "11.0", Build: "41237", Product: "Server", "OS Version": "Win10(1809)" },
        { Checkbox: "Checkbox", "Session ID": "25", "Publish Time": "12/29/21 05:31 PM", ArcGIS: "3.1", Build: "41236", Product: "Pro", "OS Version": "Win10(1809)" },
        { Checkbox: "Checkbox", "Session ID": "26", "Publish Time": "12/29/21 05:31 AM", ArcGIS: "3.0", Build: "41235", Product: "Pro", "OS Version": "Win10(1809)" },
        { Checkbox: "Checkbox", "Session ID": "27", "Publish Time": "12/27/21 05:31 PM", ArcGIS: "11.1", Build: "41234", Product: "Server", "OS Version": "Win10(1809)" },
      ],
      checkboxesChecked: [],
      sortField: "",
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

    sortTable3(field, event) {
      var iElement;
      var direction = "asc";

      var element = event.target;

      if (element.nodeName == "I") {
        iElement = element;
        element = element.parentNode;
      } else {
        iElement = element.querySelector("i");
      }

      if (iElement) {
        if (iElement.className.includes("down")) {
          iElement.remove();

          let newEl = document.createElement("i");
          newEl.classList.add("bi");
          newEl.classList.add("bi-sort-alpha-up");
          element.appendChild(newEl);
          direction = "desc";
        } else {
          iElement.remove();

          let newEl = document.createElement("i");
          newEl.classList.add("bi");
          newEl.classList.add("bi-sort-alpha-down");
          element.appendChild(newEl);
          direction = "asc";
        }
      } else {
        let parent = element.parentNode;
        if (parent.nodeName == "THEAD") {
          var children = document.getElementsByTagName("th");
          for (var i = 0; i < children.length; i++) {
            iElement = children[i].querySelector("i");
            if (iElement) {
              iElement.remove();
            }
          }
        }

        let newEl = document.createElement("i");
        newEl.classList.add("bi");
        newEl.classList.add("bi-sort-alpha-down");
        element.appendChild(newEl);
      }

      this.data = orderBy(this.data, field, direction);
      // console.log(updatedList);
    },

    // sortTable2() {
    //   document.querySelectorAll("th").forEach((th) =>
    //     th.addEventListener("click", () => {
    //       const table = th.closest("table");
    //       const tbody = table.querySelector("tbody");
    //       Array.from(tbody.querySelectorAll("tr"))
    //         .sort(comparer(Array.from(th.parentNode.children).indexOf(th), (this.asc = !this.asc)))
    //         .forEach((tr) => tbody.appendChild(tr));
    //     })
    //   );
    // },

    getCellValue(tr, idx) {
      return tr.children[idx].innerText || tr.children[idx].textContent;
    },

    // Returns a function responsible for sorting a specific column index
    // (idx = columnIndex, asc = ascending order?).
    comparer(idx, asc) {
      // This is used by the array.sort() function...
      return function (a, b) {
        // This is a transient function, that is called straight away.
        // It allows passing in different order of args, based on
        // the ascending/descending order.
        return (function (v1, v2) {
          // sort based on a numeric or localeCompare, based on type...
          return v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2);
        })(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));
      };
    },

    sortTable(data, col) {
      console.log("Sorting column: ", col);
      var updatedList = sortBy(data, col);
      console.log("UpdatedList: ", updatedList.value);
    },
  },
  getters: {},
});
