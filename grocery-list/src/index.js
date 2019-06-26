import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from './config/redux';


const AppWithRedux = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(AppWithRedux, document.getElementById('root'));
registerServiceWorker();
