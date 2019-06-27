import { createStore } from 'redux';
import groceriesReducer from '../redux/GroceriesReducer';

const store = createStore(groceriesReducer);

export { store };
