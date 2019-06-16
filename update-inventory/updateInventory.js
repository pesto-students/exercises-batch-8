function updateInventory(currentInventory, newInventory) {
  const updatedInventory = currentInventory.reduce((result, [quantity, name]) => {
    result[name] = quantity;
    return result;
  }, {});

  newInventory.forEach(([quantity, item]) => {
    updatedInventory[item] = (updatedInventory[item] || 0) + quantity;
  });

  return Object.keys(updatedInventory).sort().map(key => [updatedInventory[key], key]);
}

export {
  updateInventory,
};
