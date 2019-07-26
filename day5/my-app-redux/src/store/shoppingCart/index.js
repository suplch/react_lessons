import stateStruct from '../state_struct';

function shoppingCartReducer(state = stateStruct.shoppingCart, action) {
    switch (action.type) {
        case 'PICK_PRODUCT':
            let product = action.product;
            let exist = false;
            let newItems = state.items.map((item, index) => {

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
            return {...state, items: newItems };
        default:
            return state
    }
}
export default shoppingCartReducer
