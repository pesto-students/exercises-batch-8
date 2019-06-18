function getItemCount(item) {
  return item[0];
}

function getItemName(item) {
  return item[1];
}

function updateInventory(currentInventory, newInventory) {
  const updatedInventory = currentInventory.reduce((acc, item) => {
    const indexOfNewItem = newInventory
      .findIndex(newItem => getItemName(newItem) === getItemName(item));
    if (indexOfNewItem === -1) {
      acc.push(item);
    } else {
      const existingOldItem = acc[indexOfNewItem];
      const totalItemCount = getItemCount(existingOldItem) + getItemCount(item);
      acc[indexOfNewItem] = [totalItemCount, getItemName(item)];
    }
    return acc;
  }, newInventory);

  return updatedInventory.sort((item1, item2) => (
    getItemName(item1).localeCompare(getItemName(item2))
  ));
}

export {
  updateInventory,
};
