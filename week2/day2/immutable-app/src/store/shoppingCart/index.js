import stateStruct from '../state_struct';

import { Map } from 'immutable';

function shoppingCartReducer(state = stateStruct.get('shoppingCart'), action) {
    switch (action.type) {
        case 'PICK_PRODUCT':
            let product = action.product;
            let existIndex = -1;
            return state.update('items', (items, index) => {

                let newItems = items.map((item, index) => {
                    if (item.get('id') === product.get('id')) {
                        existIndex = index
                    }
                    return item;
                });

                if (existIndex === -1) {
                    return newItems.push(product.merge(Map({count: 1})))
                } else {
                    return items.update(existIndex, (item) => {
                        return item.set('count', item.get('count') + 1)
                    })
                }
            });

            // let product = action.product;
            // let exist = false;
            // let newItems = state.items.map((item, index) => {
            //
            //     if (item.id === product.id) {
            //         exist = true;
            //         return {...product, count: item.count + 1}
            //     } else {
            //         return item;
            //     }
            // });
            // if (!exist) {
            //     newItems.push({...product, count: 1});
            // }
            // return {...state, items: newItems };
        default:
            return state
    }
}
export default shoppingCartReducer
