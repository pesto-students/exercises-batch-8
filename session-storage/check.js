/* eslint-disable */
let value = '';

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);


const theForm = document.getElementsByTagName('form')[0];
theForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const txtKey = document.getElementById('key');
  const txtValue = document.getElementById('value');

  if ('world' === txtKey.value && txtValue.value) {
    sessionStorage.setItem('world', txtValue.value);
  } else {
    alert('Either value of key is not "world" or the value is missing.');
  }


  // TODO: Clear input values
})