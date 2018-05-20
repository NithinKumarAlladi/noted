import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';
import appReducer from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const render = () => {
    // eslint-disable-next-line react/jsx-filename-extension
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

store.subscribe(render);
render();
