
function updateInventory(inventory, updates) {
  const inventoryObject = inventory.reduce((acc, [quantity, name]) => {
    const accumulatorObj = { ...acc };
    accumulatorObj[name] = quantity;
    return accumulatorObj;
  }, {});

  for (const [quantity, name] of updates) {
    const itemExists = Object.prototype.hasOwnProperty.call(inventoryObject, name);
    if (itemExists) {
      inventoryObject[name] += quantity;
    } else {
      inventoryObject[name] = quantity;
    }
  }

  const sortedItemNames = Object.keys(inventoryObject).sort();
  const updatedInventory = sortedItemNames.map(name => [inventoryObject[name], name]);

  return updatedInventory;
}

export {
  updateInventory,
};
