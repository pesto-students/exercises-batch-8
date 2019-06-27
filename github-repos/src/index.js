import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers } from 'redux'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import App from './App';
import { repoReducer, loadingReducer } from './redux/reducers';


const reducers = combineReducers({
  repos: repoReducer,
  loading: loadingReducer
})
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
