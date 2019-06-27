const GroceriesReducer = (state = { groceries: ['aa', 'bb'] }, action) => {
  console.log('inside reducer', state, action);
  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedGroceries = state.groceries;
      updatedGroceries.push(action.itemName);
      return { ...state, groceries: updatedGroceries };
    }
    case 'CLEAR_ITEMS':
      return { ...state, groceries: [] };
    default:
      return { ...state };
  }
};

export default GroceriesReducer;
