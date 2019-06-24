/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
var window;

function question4() {
  const table = window.document.getElementById('sampleTable');
  const nextRowIndex = table.rows.length;
  const row = table.insertRow(nextRowIndex);
  row.insertCell(0).innerText = `Row${nextRowIndex + 1} cell1`;
  row.insertCell(1).innerText = `Row${nextRowIndex + 1} cell2`;
}

const insertRow = (event) => {
  event.preventDefault();
  question4();
};
