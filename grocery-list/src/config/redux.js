import { createStore } from 'redux';
import { groceryListReducer } from '../redux/reducers';

const store = createStore(groceryListReducer);

export {
    store,
}