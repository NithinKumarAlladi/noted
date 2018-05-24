import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';


import App from './App';
import appReducer from './reducers';

const enhancer = compose(
    persistState('notes'),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-disable no-underscore-dangle */
const store = createStore( appReducer, enhancer );
/* eslint-enable */

const render = () => {
    // eslint-disable-next-line react/jsx-filename-extension
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

store.subscribe(render);
render();
