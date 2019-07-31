import React from 'react';

import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

export default class ShopApp extends React.Component{

    render() {

        return (
            <div>
                产品列表
                <ProductList/>
                购物车
                <ShoppingCart />
            </div>
        )
    }
}
