/* eslint-disable */
let value = '';
let current;
window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);

function onKeyValue() {
  const key = document.getElementById('key').value;
  const value = document.getElementById('value').value;
  sessionStorage.setItem(key, value);
  const existingElement = document.getElementById(key);
  console.log(existingElement);
  if (existingElement === null) {
    const node = document.createElement('LI');
    node.setAttribute('id', key);
    const textnode = document.createTextNode(key + ' ' + value);
    node.appendChild(textnode);
    document.getElementById('sessionStorageList').appendChild(node);
  } else {
    document.getElementById(key).innerText = key + ' ' + value;
  }
}
