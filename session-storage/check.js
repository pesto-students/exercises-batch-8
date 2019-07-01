/* eslint-disable */
let value = '';

function renderSessionList() {
  const sessionListContainer = document.getElementById('sessionList');
  if (sessionStorage.length) {
    let html = "<h3>localSession values</h3><br />";
    html += "<ol>";
    for (const key of Object.keys(sessionStorage)) {
      html += `<li>Key: ${key}, value: ${sessionStorage.getItem(key)} <button data-key="${key}">Delete session</li>`
    }
    html += '</ol><br />';
    sessionListContainer.innerHTML = html;
  } else {
    sessionListContainer.innerHTML = '';
  }
}

function attachDeleteEvents() {
  const sessionDeleteButtons = document.querySelectorAll("#sessionList ol li button");
  for (var i = 0; i < sessionDeleteButtons.length; i++) {
    sessionDeleteButtons[i].removeEventListener('click', fnDeleteSession, true);
    sessionDeleteButtons[i].addEventListener('click', fnDeleteSession);
  }
}

function fnOnFormSubmit(event) {
  event.preventDefault();

  const txtKey = document.getElementById('key');
  const txtValue = document.getElementById('value');

  if (txtKey.value && txtValue.value) {
    sessionStorage.setItem(txtKey.value, txtValue.value);
    txtKey.value = '';
    txtValue.value = '';
    renderSessionList();
    attachDeleteEvents();
  } else {
    alert('Either value or key is not provided.');
  }
}

function fnDeleteSession(e) {
  console.log("delete function called")
  e.preventDefault();
  const key = e.target.getAttribute('data-key');
  sessionStorage.removeItem(key);
  renderSessionList();
  attachDeleteEvents();
}

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);


const theForm = document.getElementsByTagName('form')[0];
theForm.addEventListener('submit', fnOnFormSubmit)

renderSessionList();
attachDeleteEvents();
