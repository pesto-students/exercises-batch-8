
function updateInventory(currentInventory, newItems) {
  const newInventory = [];

  const mapOfCurrentInventory = {};
  currentInventory.forEach(([quantity, item]) => {
    mapOfCurrentInventory[item] = quantity;
  });

  newItems.forEach(([quantity, item]) => {
    if (mapOfCurrentInventory[item]) {
      mapOfCurrentInventory[item] += quantity;
    } else {
      mapOfCurrentInventory[item] = quantity;
    }
  });

  Object.keys(mapOfCurrentInventory).sort().forEach((item) => {
    newInventory.push([mapOfCurrentInventory[item], item]);
  });

  return newInventory;
}

export {
  updateInventory,
};
