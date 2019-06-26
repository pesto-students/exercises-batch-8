/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import { createStore } from 'redux';
import appReducer from '../redux/reducers/appReducer';

const store = createStore(appReducer, {},
  window.devToolsExtension && window.devToolsExtension());

export default store;
