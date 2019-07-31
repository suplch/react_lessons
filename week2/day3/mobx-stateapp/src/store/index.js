import React from 'react';
import {observable} from "mobx";
import { observer } from 'mobx-react';
let shop = observable({
    goods: {
        products: [
            {id: '111', name: '电脑', price: 10000},
            {id: '222', name: '鼠标', price: 200},
        ]
    },
    shoppingCart: {
        items: [
            {id: '222', name: '鼠标', price: 200, count: 1},
        ]
    },
    pickProduct(product) {
        let items = this.shoppingCart.items;
        let exist = false;
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === product.id) {
                items[i].count++;
                exist = true;
            }
        }
        if (!exist) {
            items.push({...product, count: 1});
        }
    },
    addItemCount(item, n) {
        console.log(item);
        if (item.count + n > 0) {
            item.count += n;
        }
    },
});
export default shop;
// 定义一个connect 函数, 用来 包装我们的业务组件,

export function connect(WrapComponent) {
    // 第一步 先调用 observer 函数 把原来组件变成可观察的组件,
    const ObserverComponent= observer(WrapComponent);
    return function (props) {
        return (
            {/* 然后 返回一个高阶组件,追加一个参数 shop */}
            <ObserverComponent {...props} shop={shop}  />
        )
    }
}
