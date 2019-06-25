document.addEventListener('DOMContentLoaded', () => {
  // TODO: implement function
  function replaceContent(row, col) {
    const txtReplacer = 'Yahoo!';
    const elFinderRow = document.querySelector(`tr:nth-child(${row})`);
    if (elFinderRow.length) {
      const elCellToModify = document.querySelector(`td:nth-child(${col})`);
      if (elCellToModify.length) {
        elCellToModify.innerHTML = txtReplacer;
        return true;
      }
      return false;
    }
    return false;
  }

  function changeContent(e) {
    e.preventDefault();

    const numbers = {
      rowNumber: 0,
      colNumber: 0,
    };
    const txtRowNumber = document.getElementById('txtRowNumber');
    if (txtRowNumber.length) {
      numbers.rowNumber = txtRowNumber.value;
    }
    const txtColNumber = document.getElementById('txtColNumber');
    console.log(txtColNumber);
    if (txtColNumber.length) {
      numbers.colNumber = txtColNumber.value;
    }
    console.log(numbers.rowNumber, numbers.colNumber);

    if (numbers.rowNumber && numbers.colNumber) {
      const didReplace = replaceContent(numbers.rowNumber, numbers.colNumber);
      if (!didReeplace) {
        alert('The row and column combination does not exist in the table.');
      }
    } else {
      // TODO: show error on screen
      // alert('Please select a row and a column number');
    }
  }

  const formChangeContent = document.getElementById('frmChangeContent');
  if (formChangeContent) {
    formChangeContent.addEventListener('submit', changeContent);
  }
});
