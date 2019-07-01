/* eslint-disable no-unused-vars */
const insertRow = () => {
    const table = document.querySelector('#sampleTable');
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.innerHTML = 'Row0 Cell1';
    cell2.innerHTML = 'Row0 Cell2';
  };
  