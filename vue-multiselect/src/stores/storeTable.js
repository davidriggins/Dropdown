import { defineStore } from "pinia";
import { orderBy, sortBy, where } from "lodash";

export const useStoreTable = defineStore("storeTable", {
  state: () => {
    return {
      fields: ["Checkbox", "Session ID", "Publish Time", "ArcGIS", "Build", "Product", "OS Version"],
      filters: ["nf", "so", "so", "dd", "dd", "dd", "dd"],

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

    sortTable(field, event) {
      var iElement;
      var direction = "asc";

      // Get the event target element
      var element = event.target;

      // If the element is an "I" we want the parent element ("TH").
      // This will be the case if someone clicked on the sort icon as
      // opposed to the TH. If so, the icon is a child of the TH.
      // We need the parent element TH for later processing.
      if (element.nodeName == "I") {
        iElement = element;
        element = element.parentNode;
      } else {
        iElement = element.querySelector("i");
      }

      // If there is an I element, determine if it is the down icon
      // or the up icon. Remove the existing icon and add the
      // appropriate one. Also, assign the direction of sort.
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

        // Otherwise, there is no existing icon on this TH. We want to
        // remove any existing icon from the TH's.  Then, we add a new
        // icon to the TH. Default first click is ascending order sort.
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

      // Use Lodash utility to sort.
      this.data = orderBy(this.data, field, direction);
    },

    getCellValue(tr, idx) {
      return tr.children[idx].innerText || tr.children[idx].textContent;
    },
  },
  getters: {},
});
