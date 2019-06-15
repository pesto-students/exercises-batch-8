const convertArrayToObject = (array) => {
  const object = {};
  array.map((item) => {
    // eslint-disable-next-line prefer-destructuring
    object[item[1]] = item[0];
    return null;
  });
  return object;
};
const convertObjectToArray = object => Object.keys(object).map(key => [object[key], key]);

function updateInventory(initialInventory, newItems) {
  const inventoryObject = convertArrayToObject(initialInventory);
  const newItemsObject = convertArrayToObject(newItems);

  Object.keys(newItemsObject).map((key) => {
    if (!inventoryObject[key]) {
      inventoryObject[key] = 0;
    }
    inventoryObject[key] += newItemsObject[key];
    return null;
  });
  return convertObjectToArray(inventoryObject).sort((a, b) => a[1] > b[1]);
}

export {
  updateInventory,
};
