import uuidv1 from 'uuid/v1';

import { ADD_ITEM, DEL_ITEM, CLEAR_LIST, UPDATE_ITEM, TOGGLE_PURCHASE } from './constants';

const history = sessionStorage.getItem('groceries');
console.log(history);

const initialState = {
  groceries: JSON.parse(history) || [],
};

function groceriesReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM: {
      const itemId = uuidv1();
      const item = {
        name: payload,
        id: itemId,
        purchased: false,
      };
      sessionStorage.setItem('groceries', JSON.stringify([...state.groceries, item]));
      return {
        ...state,
        groceries: [...state.groceries, item],
      };
    }
    case DEL_ITEM: {
      const idToDelete = payload;
      const filteredGroceries = state.groceries
        .filter(item => item.id !== idToDelete);
      sessionStorage.setItem('groceries', JSON.stringify(filteredGroceries));
      return {
        ...state,
        groceries: filteredGroceries,
      };
    }
    case CLEAR_LIST:
      sessionStorage.clear();
      return {
        ...state,
        groceries: [],
      };
    case TOGGLE_PURCHASE: {
      const { groceries } = state;
      const itemId = payload;
      const updatedGroceries = groceries
        .map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              purchased: !item.purchased,
            };
          }
          return item;
        });
      sessionStorage.setItem('groceries', JSON.stringify(updatedGroceries));
      return {
        ...state,
        groceries: updatedGroceries,
      };
    }
    case UPDATE_ITEM: {
      const { groceries } = state;
      const { content, itemId } = payload;
      const updatedGroceries = groceries
        .map((item) => {
          if (item.id === itemId) {
            return {
              ...item,
              name: content,
            };
          }
          return item;
        });
      sessionStorage.setItem('groceries', JSON.stringify(updatedGroceries));
      return {
        ...state,
        groceries: updatedGroceries,
      };
    }
    default:
      return state;
  }
}

export default groceriesReducer;
