/* eslint-disable no-unused-vars */
const getOptions = () => {
    const dropDown = document.querySelector('#mySelect');
    const { length } = dropDown;
    const options = [...Array(length)].map((_, i) => i).map(i => dropDown[i].innerHTML);
    const optionsString = options.toString();
    alert(`There are ${length} colors :${optionsString}`);
  };
  