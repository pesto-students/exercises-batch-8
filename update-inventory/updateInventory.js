function createDict(acc = {}, item) {
  const [value, key] = item;
  acc[key] = value;
  return acc;
}

function comparator(itemA, itemB) {
  const first = itemA[1].toUpperCase();
  const second = itemB[1].toUpperCase();

  if (first < second) {
    return -1;
  }
  if (first > second) {
    return 1;
  }
  return 0;
}

function updateInventory(currentInventory, freshItems) {
  const inventory = currentInventory.reduce(createDict, {});
  const newItems = freshItems.reduce(createDict, {});

  const updatedInventory = Object.keys(newItems).reduce((acc, item) => {
    if (!acc[item]) {
      acc[item] = newItems[item];
      return acc;
    }
    if (acc[item] && acc[item] < newItems[item]) {
      acc[item] += newItems[item];
      return acc;
    }
    return acc;
  }, inventory);

  const finalInventoryArr = Object.keys(updatedInventory).map(key => [updatedInventory[key], key]);

  return finalInventoryArr.sort(comparator);
}

export { updateInventory };
