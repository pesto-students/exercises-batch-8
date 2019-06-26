import { ADD_ITEM, DEL_ITEM } from './constants';

export const addItem = (itemName) => {
    return ({
        type: ADD_ITEM,
        payload: itemName,
    })
}

export const deleteItem = (itemId) => {
    return ({
        type: DEL_ITEM,
        payload: itemId,
    })
}