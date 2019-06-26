import { ADD_ITEM, DEL_ITEM } from './constants';

initialState = {
    groceries = [],
}

function groceriesReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_ITEM:
            const itemId = Symbol(payload);
            const item = {
                name: payload,
                id: itemId,
            }
            return {
                ...state,
                groceries: [...state.groceries, item],
            }
        case DEL_ITEM:
            const idToDelete = payload;
            const filteredGroceries = state.groceries
                .filter(item => item.id === idToDelete);
            return {
                ...state,
                groceries: filteredGroceries,
            }
        default:
            state;
    }
}

export default groceriesReducer;