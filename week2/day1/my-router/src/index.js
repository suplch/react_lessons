import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './store'

import ShopApp from './ShopApp';

ReactDOM.render(
    <Provider store={store}>
        <ShopApp />
    </Provider>,
    document.getElementById('root')
);
