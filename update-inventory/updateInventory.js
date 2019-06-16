function updateInventory(oldInv, newInv) {
  const inventoryMap = {};
  return [...oldInv, ...newInv].reduce((updatedInventory, record) => {
    const [count, itemName] = record;
    if (itemName in inventoryMap) {
      inventoryMap[itemName][0] += count;
    } else {
      inventoryMap[itemName] = record;
      updatedInventory.push(record);
    }
    return updatedInventory;
  }, []).sort((record1, record2) => record1[1].localeCompare(record2[1]));
}

export {
  updateInventory,
};
