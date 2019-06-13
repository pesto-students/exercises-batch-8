/* eslint-disable no-param-reassign */

function dropElements(array, func) {
  return array.filter(ele => func(ele));
}

export {
  dropElements,
};
