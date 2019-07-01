/* eslint-disable no-unused-vars */
const changeContent = () => {
    const table = document.querySelector('#myTable');
    const row = table.rows[0];
    const cell1 = table.rows[0].cells.item(0);
    const cell2 = table.rows[0].cells.item(1);
    cell1.innerHTML = 'New Value';
    cell2.innerHTML = 'New Value';
  };
  