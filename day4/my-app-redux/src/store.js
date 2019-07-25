import {createStore} from "redux";
const initData = {
    goods: {
        products: [
            {id: '111', name: '电脑', price: 10000},
            {id: '222', name: '键盘', price: 100},
        ]
    },
    shoppingCart: {
        items: [
            {id: '222', name: '键盘', price: 100, count: 2}
        ]
    }
};
function tiangouReducer(state = initData, action) {
    switch (action.type) {
        case 'PICK_PRODUCT':

            let product = action.product;
            let exist = false;
            let newItems = state.shoppingCart.items.map((item, index) => {

                if (item.id === product.id) {
                    exist = true;
                    return {...product, count: item.count + 1}
                } else {
                    return item;
                }
            });
            if (!exist) {
                newItems.push({...product, count: 1});
            }
            return {...state, shoppingCart: { items: newItems }};
        case 'ADD_PRODUCT':

            let newProducts = [...state.goods.products, action.product];
            return {...state, goods: { products:  newProducts}};

        default:
            return state
    }
}
const store = createStore(tiangouReducer);
export default store;
