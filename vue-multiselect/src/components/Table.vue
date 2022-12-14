<template>
  <div id="outer-div"></div>
</template>

<script setup>
import { onMounted, reactive, ref } from "vue";

const tableHeader = ref(["checkbox", "Publish Time", "ArcGIS", "Build", "Product", "OS Version"]);

const data = reactive([
  { sessionId: 23, "publish-time": "12/31/21 05:31 PM", arcgis: "11.1", build: "41238", product: "Server", "os-version": "Win10(1809)" },
  { sessionId: 24, "publish-time": "12/30/21 05:31 AM", arcgis: "11.0", build: "41237", product: "Server", "os-version": "Win10(1809)" },
  { sessionId: 25, "publish-time": "12/29/21 05:31 PM", arcgis: "3.1", build: "41236", product: "Pro", "os-version": "Win10(1809)" },
  { sessionId: 26, "publish-time": "12/29/21 05:31 AM", arcgis: "3.0", build: "41235", product: "Pro", "os-version": "Win10(1809)" },
  { sessionId: 27, "publish-time": "12/27/21 05:31 PM", arcgis: "11.1", build: "41234", product: "Server", "os-version": "Win10(1809)" },
]);

const columns = reactive([
  { title: "checkbox", field: "checkbox", width: 50 },
  { title: "Publish Time", field: "pubtime", width: 120 },
  { title: "ArcGIS", field: "arcgis", width: 100 },
  { title: "Build", field: "build", width: 100 },
  { title: "Product", field: "product", width: 100 },
  { title: "OS Version", field: "osv", width: 100 },
]);

onMounted(() => {
  drawTable();
});

const drawTable = () => {
  var outerDiv = document.getElementById("outer-div");
  var table = document.createElement("table");
  table.classList.add("qam-table");

  var tableHead = createHeaderRow();
  table.appendChild(tableHead);

  var tableBody = createTableBody();
  table.appendChild(tableBody);

  outerDiv.appendChild(table);
};

const createHeaderRow = () => {
  // Create the table header row element.
  var tableHead = document.createElement("thead");
  tableHead.classList.add("qam-head");
  var tableHeadRow = document.createElement("tr");
  tableHeadRow.classList.add("qam-head-row");

  // Identify if a checkbox column is specified.
  var tableHeadCell;
  var cellContent = "";
  var hasCheckbox = false;
  if (columns[0].title === "checkbox") {
    hasCheckbox = true;
  }

  // Set the table header cell CSS prefix.
  var classListString = "qam-thc-";

  // Loop through the column attributes to put the title values into the
  // table header cells.
  for (var col = 0; col < columns.length; col++) {
    tableHeadCell = document.createElement("th");
    tableHeadCell.classList.add(classListString + col.toString());

    // If it is the first column and "checkbox" is specified, add a checkbox.
    if (col === 0) {
      if (hasCheckbox) {
        cellContent = document.createTextNode("cb");
        tableHeadCell.appendChild(cellContent);
      } else {
        cellContent = document.createTextNode(columns[col].title);
        tableHeadCell.appendChild(cellContent);
      }
    } else {
      cellContent = document.createTextNode(columns[col].title);
      tableHeadCell.appendChild(cellContent);
    }

    tableHeadRow.appendChild(tableHeadCell);
  }

  tableHead.appendChild(tableHeadRow);

  return tableHead;
};

const createTableBody = () => {
  var tableBody = document.createElement("tbody");
  tableBody.classList.add("qam-body");

  var rowsArray = data.map(Object.values);
  var numRows = rowsArray.length;

  for (var row = 0; row < numRows; row++) {
    var rowContent = createTableRow(row);
    // rowContent.classList.add("qam-row");
    tableBody.appendChild(rowContent);
  }

  return tableBody;
};

const createCheckbox = () => {
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("qam-checkbox");

  return checkbox;
};

const createTableRow = (rowNum) => {
  var cellContent = "";

  var row = document.createElement("tr");
  row.classList.add("qam-row");

  var hasCheckbox = false;
  if (columns[0].title === "checkbox") {
    hasCheckbox = true;
  }

  var rowsArray = data.map(Object.values);
  var numCols = rowsArray[0].length;

  for (var col = 0; col < numCols; col++) {
    var tableData = document.createElement("td");
    tableData.classList.add("qam-cell");
    tableData.classList.add("no-wrap");

    if (col === 0) {
      if (hasCheckbox) {
        var checkbox = createCheckbox();
        tableData.appendChild(checkbox);
      } else {
        cellContent = document.createTextNode(rowsArray[rowNum][col]);
        tableData.appendChild(cellContent);
      }
    } else {
      cellContent = document.createTextNode(rowsArray[rowNum][col]);
      tableData.appendChild(cellContent);
    }

    row.appendChild(tableData);
  }

  return row;
};
</script>

<style>
/* *,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  font-weight: normal;
}

table,
thead,
tbody,
tfoot,
th,
td,
tr {
  all: unset;
} */

table {
  /* display: block; */
  border: 2px solid #ccc;
}

thead {
}

thead tr {
  border-bottom: 2px solid #ccc;
}

thead th {
  border: 1px solid #ccc;
}

tbody tr {
}

th,
td {
  text-align: left;
}

tbody td {
  border: 1px solid #ccc;
  padding: 0 0.2rem;
}

input {
  width: 25px;
}

.nowrap {
  white-space: nowrap;
}
</style>
