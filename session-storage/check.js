/* eslint-disable */
// let value = '';

// window.setInterval(() => {
//   if (value === '' || value === null) {
//     value = sessionStorage.getItem('world');
//   } else {
//     document.getElementsByClassName('status')[0].innerText = 'Value add successful';
//   }
// }, 200);

let value = '';
let form;

window.addEventListener('DOMContentLoaded', init);
window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);

function init() {
  setRefs();
  bindEvents();
}
function setRefs() {
  form = document.querySelector('form');
}
function bindEvents() {
  form.addEventListener('submit', submitForm);
}
function submitForm(event) {
  event.preventDefault();
  const key = document.querySelector('#key').value;
  const value = document.querySelector('#value').value;
  if ('world' === key && value) {
    sessionStorage.setItem('world', value);
  } else {
    alert('Either value of key is not "world" or the value is missing.');
  }
}