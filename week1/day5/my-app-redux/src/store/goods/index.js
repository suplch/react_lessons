
import stateStruct from '../state_struct';

function goodsReducer(state = stateStruct.goods, action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            let newProducts = [...state.products, action.product];
            return {...state, products:  newProducts };

        default:
            return state;
    }
}


export default goodsReducer;
