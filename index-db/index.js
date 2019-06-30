const inputVal = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

const pushChange = () => {
  const newValue = inputVal.value;
  const newli = document.createElement('li');
  const newTodo = document.createTextNode(newValue);
  newli.appendChild(newTodo);
  list.appendChild(newli);
  inputVal.value = '';
};
