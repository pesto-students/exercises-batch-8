
function updateInventory(existingInventory, newInventory) {
  const inventoryData = existingInventory
    .reduce((acc, currentItem) => ({ ...acc, [currentItem[1]]: currentItem[0] }), {});
  const updatedInventoryData = newInventory.reduce((acc, currentItem) => {
    const currentInventory = acc[currentItem[1]];
    if (currentInventory !== undefined) {
      return { ...acc, [currentItem[1]]: currentItem[0] + currentInventory };
    }
    return { ...acc, [currentItem[1]]: currentItem[0] };
  }, inventoryData);
  return Object.keys(updatedInventoryData).sort().map(key => [updatedInventoryData[key], key]);
}

export {
  updateInventory,
};
