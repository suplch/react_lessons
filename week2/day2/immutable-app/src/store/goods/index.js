import { Map } from 'immutable';
import stateStruct from '../state_struct';

function goodsReducer(state = stateStruct.get('goods'), action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            // let newProducts = [...state.products, action.product];
            // return {...state, products:  newProducts };

            return state.update('products', (products) => {
                return products.push(Map(action.product))
            });

        default:
            console.log('goodsReducer', state.toString())
            return state;
    }
}


export default goodsReducer;
