/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducer from '../redux/reducers';

export default createStore(
  reducer,
  window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
