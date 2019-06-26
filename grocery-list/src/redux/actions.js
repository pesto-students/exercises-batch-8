import { ADD_GROCERY_ITEM, CLEAR_LIST } from "./constants";

const addItemToGroceryList = name => ({ type: ADD_GROCERY_ITEM, name });
const clearGroceryList = () => ({ type: CLEAR_LIST });


export {
    addItemToGroceryList,
    clearGroceryList,
}