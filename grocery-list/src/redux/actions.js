import {
  ADD_ITEM,
  DEL_ITEM,
  CLEAR_LIST,
  UPDATE_ITEM,
  TOGGLE_PURCHASE,
} from './constants';

export const addItem = itemName => ({
  type: ADD_ITEM,
  payload: itemName,
});

export const deleteItem = itemId => ({
  type: DEL_ITEM,
  payload: itemId,
});

export const clearList = () => ({
  type: CLEAR_LIST,
});

export const updateItem = (content, itemId) => ({
  type: UPDATE_ITEM,
  payload: {
    content,
    itemId,
  },
});

export const togglePurchase = itemId => ({
  type: TOGGLE_PURCHASE,
  payload: itemId,
});
