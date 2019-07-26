import {createStore, combineReducers } from "redux";
import goodsReducer from './goods';
import shoppingCartReducer from './shoppingCart';

import userOrderReducer from './order/userOrder';
import enterpriseOrderReducer from './order/enterpriseOrder';

//   combineReducers 函数 用来将不同的 reducer 进行组合
const appReducer = combineReducers({
    goods: goodsReducer,
    shoppingCart: shoppingCartReducer,
    order: {
        userOrder: userOrderReducer,
        enterpriseOrder: enterpriseOrderReducer
    }
});

const store = createStore(appReducer);
export default store;
