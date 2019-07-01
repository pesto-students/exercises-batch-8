/* eslint-disable */
let value = "";

const btn = document.getElementsByClassName("btn")[0];

const updateLiveData = () => {
  const liveData = document.getElementById("live-data");
  liveData.innerHTML = '';
  const entries = Object.entries(sessionStorage);
  entries.forEach(entry => {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${entry[0]}: ${entry[1]} 
    <button onclick="deleteEntry('${entry[0]}')">x</button>`
    liveData.appendChild(newLi);
  });
};

const deleteEntry = (key) => {
  sessionStorage.removeItem(key);
  updateLiveData();
}

btn.onclick = e => {
  e.preventDefault();
  const key = document.getElementById("key").value;
  value = document.getElementById("value").value;
  sessionStorage.setItem(key, value);

  updateLiveData();
};

window.setInterval(() => {
  if (value === "" || value === null) {
    value = sessionStorage.getItem("world");
  } else {
    document.getElementsByClassName("status")[0].innerText =
      "Value add successful";
  }
}, 200);

updateLiveData();