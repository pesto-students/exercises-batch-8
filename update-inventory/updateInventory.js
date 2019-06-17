
function updateInventory(oldInventory, newInventory) {
  const store = {};

  oldInventory.forEach((entry) => {
    const [itemCount, item] = entry;
    store[item] = itemCount;
  });
  newInventory.forEach((entry) => {
    const [itemCount, item] = entry;
    if (store[item] !== undefined) {
      store[item] += itemCount;
    } else {
      store[item] = itemCount;
    }
  });
  const updatedInventory = Object.keys(store)
    .map(key => [store[key], key]);
  updatedInventory.sort((a, b) => a[1] > b[1]);
  return updatedInventory;
}

export {
  updateInventory,
};
