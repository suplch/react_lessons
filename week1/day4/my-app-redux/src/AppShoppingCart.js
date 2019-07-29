import React from 'react';

import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                产品列表
                <ProductList />
                <hr/>
                购物车
                <ShoppingCart  />

            </div>
        )
    }
}



export default App;
