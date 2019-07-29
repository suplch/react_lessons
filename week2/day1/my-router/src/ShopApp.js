import React from 'react';
// 导入 react路由
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

import ProductList from './views/ProductList';
import ShoppingCart from './views/ShoppingCart';

function ShopApp() {
    return (
        <BrowserRouter> {/* 使用 html5 路由 */}
            <div>
                <Link to="/product">产品列表</Link>
            </div>

            <Switch>
                <Route path="/product" component={ProductList} />
                <Route path="/shoppingcart" component={ShoppingCart} />
            </Switch>
        </BrowserRouter>
    );
}
export default ShopApp;
