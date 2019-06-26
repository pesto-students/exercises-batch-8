import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GITHUB_REPOS':
      return { ...state, repos: action.repos };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();

export default store;
