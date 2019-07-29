// 导入 redux 模块, createStore 是用来创建 状态存储库

/*
const state = {
    products: [
        {id: '111', name: '电脑', price: 10000},
        {id: '222', name: '鼠标', price: 100}
    ],
    shoppingCart: {
        items: [
            {id: '111', name: '电脑', price: 10000, count: 1},
            {id: '111', name: '鼠标', price: 100, count: 2},
        ]
    }
};
*/
//  导入 redux 模块, createStore 是用来创建 状态存储库
/*
import { createStore } from 'redux';
function exist(items, product_id) {
    let index = 0;
    for (let item of items) {
        if (item.id === product_id) {
            return {index, item};
        }
        index++;
    }
    return false;
}

// var obj = {name: 'zhang', age: 123};
// var obj2 = {...obj, gender: 'nana'}

// 声明一个 reducer 函数, 用来接受 状态 state 和 动作 action , 然后进行处理, 返回 新的状态
function productReducer(state = {products:[], shoppingCart: {items: []}}, action) {
    switch(action.type) {
        case 'ADD_PRODUCT':  // 添加 商品
            return {...state, products: [...state.products, action.product]};
        case 'PICK_PRODUCT':  // 选择 商品 添加 到 购物车
            let items = state.shoppingCart.items;
            let product = action.product;

            // let newItems = [...items, {id: product.id, name: product.name, price: product.price, count: 1}];
            debugger;
            let newItems = [...items];
            //              检查 product 是否已经 在购物车中了
            let itemObj = exist(newItems, product.id);
            if (itemObj) { // 如果 购物车 已经有 对应的商品, 那么只是 将 count 属性 + 1

                newItems[itemObj.index] = {...itemObj.item, count: itemObj.item.count + 1};
            } else {  // 否则 将 商品 加到 购物车 的数组里 并且 count 为 1
                newItems.push({...product,  count: 1});
            }
            // 返回 新的 状态 对象
            return {...state, shoppingCart: {items: newItems }};
        default:
            return state
    }
}

// createStore 用来创建状态 存储库, 需要 接受一个 reducer 函数
const store = createStore(productReducer);
// 订阅 状态变化, 当 store 里的 状态 发生 变化后 会 调用 回调函数
store.subscribe(function () {
    console.log(store.getState())  // 返回 状态存储库 store 里的 最新状态
});
// 添加商品 action
store.dispatch({type: 'ADD_PRODUCT', product: {id: '111', name: '电脑', price: 10000}});
store.dispatch({type: 'ADD_PRODUCT', product: {id: '222', name: '鼠标', price: 100}});
store.dispatch({type: 'ADD_PRODUCT', product: {id: '333', name: '键盘', price: 200}});

// 添加 购物车 action
store.dispatch({ type: 'PICK_PRODUCT', product: {id: '222', name: '鼠标', price: 100}} )
store.dispatch({ type: 'PICK_PRODUCT', product: {id: '444', name: '键盘', price: 200}} )
store.dispatch({ type: 'PICK_PRODUCT', product: {id: '444', name: '键盘', price: 200}} )




// debugger;
// console.log('redux');
// // 声明一个 reducer 函数, 用来接受 状态 state 和 动作 action , 然后进行处理, 返回 新的状态
// function counter(state = 0, action) {
//     debugger;
//     switch (action.type) {
//         case 'INCREDMENT':  // 如果 action.type 等于 'INCREDMENT' 那么 就将状态 +1 然后 返回给 store
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1; // 如果 action.type 等于 'DECREMENT' 那么 就将状态 1 然后 返回 给 stoer
//         default:
//             return state;  // 否则  不要处理 状态 state , 直接 将其 返回给 store
//     }
// }
// // createStore 用来创建状态 存储库, 需要 接受一个 reducer 函数
// const store = createStore(counter);
// // 订阅 状态变化, 当 store 里的 状态 发生 变化后 会 调用 回调函数
// store.subscribe(function () {
//     debugger;
//     console.log(store.getState())  // 返回 状态存储库 store 里的 最新状态
// });
// debugger;
// store.dispatch({ type: 'INCREDMENT' });  // 通过 状态存储库 despatch 分发一个 INCREDMENT action 动作,
// debugger;
// store.dispatch({ type: 'INCREDMENT' });  // 通过 状态存储库 despatch 分发一个 INCREDMENT action 动作,
// debugger;
// store.dispatch({ type: 'INCREDMENT' });  // 通过 状态存储库 despatch 分发一个 INCREDMENT action 动作,
//
// debugger;
// store.dispatch({ type: 'DECREMENT' });  // 通过 状态存储库 despatch 分发一个 DECREMENT action 动作,
// debugger;
// store.dispatch({ type: 'DECREMENT' });  // 通过 状态存储库 despatch 分发一个 DECREMENT action 动作,
// debugger;
// store.dispatch({ type: 'DECREMENT' });  // 通过 状态存储库 despatch 分发一个 DECREMENT action 动作,

*/


import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'

import { Provider } from 'react-redux';

import './style.css';

import AppShoppingCart from './AppShoppingCart';

import store from './store';


ReactDOM.render(  // 将 store 注入到 context 上下文中
    <Provider store={store}>
        <AppShoppingCart/>
    </Provider>,

    document.getElementById('root')
);
