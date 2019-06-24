/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
var window;

function question2() {
  const fName = window.document.getElementsByName('fName')[0].value;
  const lName = window.document.getElementsByName('lName')[0].value;
  return { fName, lName };
}

const getFormValue = (event) => {
  event.preventDefault();
  console.log(question2());
};
