document.addEventListener('DOMContentLoaded', () => {
  function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function insertRow(e) {
    e.preventDefault();

    const allRows = document.querySelectorAll('#sampleTable tr');
    const tableLastRow = document.querySelector('#sampleTable tr:last-child');

    const rowNumber = allRows.length + 1;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>Row${rowNumber} cell1</td>
      <td>Row${rowNumber} cell2</td>`;

    insertAfter(newRow, tableLastRow);
  }

  const btnInsertRow = document.getElementById('btnInsertRow');
  if (btnInsertRow) {
    btnInsertRow.addEventListener('click', insertRow);
  }
});
