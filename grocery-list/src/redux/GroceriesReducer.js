const GroceriesReducer = (
  state = { groceries: [{ itemName: 'aa' }, { itemName: 'bb' }] },
  action
) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedGroceries = state.groceries;
      updatedGroceries.push({ itemName: action.itemName });
      return { ...state, groceries: updatedGroceries };
    }
    case 'PURCHASE_ITEM': {
      const updatedGroceries = state.groceries;
      updatedGroceries[action.index].purchased = !updatedGroceries[action.index]
        .purchased;
      return { ...state, groceries: updatedGroceries };
    }
    case 'EDIT_ITEM': {
      const updatedGroceries = state.groceries;
      updatedGroceries[action.index].itemName = action.newName;
      return { ...state, groceries: updatedGroceries };
    }
    case 'DELETE_ITEM': {
      const updatedGroceries = state.groceries.filter((grocery, index) => index !== action.index);
      return { ...state, groceries: updatedGroceries };
    }
    case 'CLEAR_ITEMS':
      return { ...state, groceries: [] };
    default:
      return { ...state };
  }
};

export default GroceriesReducer;
