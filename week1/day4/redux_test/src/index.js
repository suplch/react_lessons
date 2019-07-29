import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';

function counterA(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function counterB(state = 0, action) {
    switch (action.type) {
        case 'INC':
            return state + 100;
        case 'DEC':
            return state - 100;
        default:
            return state;
    }
}

const appReducer = combineReducers({
    CA: counterA,
    CB: counterB
});

let store = createStore(appReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);


