import { ADD_GROCERY_ITEM, CLEAR_LIST } from './constants'

const initialGroceryList = {
    groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }]
}

const groceryListReducer = (state = initialGroceryList, action) => {
    switch(action.type) {
        case ADD_GROCERY_ITEM:
            return {
                ...state,
                groceries: [...state.groceries, { name: action.name }]
            }
        case CLEAR_LIST:
            return {
                ...state,
                groceries: [],
            }
        default:
            return state;
    }
};

const initialGroceryListItem = {
    name: ''
}

const groceryListItemReducer = (state = initialGroceryListItem, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export {
    groceryListReducer
}