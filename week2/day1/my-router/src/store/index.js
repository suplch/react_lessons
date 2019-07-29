//      applyMiddleware 应用 一个中间件函数, 来对 redux 进行修饰
import {createStore, combineReducers, applyMiddleware } from "redux";
// 导入 thunk 方便处理异步
import thunk from 'redux-thunk';
import goodsReducer from './goods';
import stateStruct from './state_struct';
import shoppingCartReducer from './shoppingCart';

import userOrderReducer from './order/userOrder';
import enterpriseOrderReducer from './order/enterpriseOrder';

//   combineReducers 函数 用来将不同的 reducer 进行组合
// const appReducer = combineReducers({
//     goods: goodsReducer,
//     shoppingCart: shoppingCartReducer,
//     order: {
//         userOrder: userOrderReducer,
//         enterpriseOrder: enterpriseOrderReducer
//     }
// });


function appReducer(state = stateStruct, action ) {
    return {
        goods: goodsReducer(state.goods, action),
        shoppingCart: shoppingCartReducer(state.shoppingCart, action),
        order: {
            userOrder: userOrderReducer(state.order.userOrder, action),
            enterpriseOrder: enterpriseOrderReducer(state.order.enterpriseOrder, action)
        }
    }
}

//                                  使用 thunk 中间件
const store = createStore(appReducer, applyMiddleware(thunk));
export default store;
