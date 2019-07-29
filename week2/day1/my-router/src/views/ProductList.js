import React from 'react';

import { connect } from 'react-redux';
import {Link} from "react-router-dom";

class ProductList extends React.Component {

    render() {
        console.log(this.props);
        const lis = this.props.products.map((item, index) => {
            return (
                <li key={item.id}>
                    {item.name}, 价格 {item.price} <button onClick={e => this.props.pickProduct(item)}>添加购物车</button>
                </li>
            )
        });
        return (
            <div>
                <ul>
                    {lis}
                </ul>

                <div style={ {position: 'absolute', border: 'solid 5px red', bottom: '10px', right: '10px'} }>
                    <Link to="/shoppingcart">查看购物车  ({this.props.itemCount()}) </Link>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.goods.products,
        itemCount() {
            return state.shoppingCart.items.reduce(function(preValue, item){
                return preValue + item.count
            }, 0)
        }
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pickProduct(product) {
            dispatch({ type: 'PICK_PRODUCT', product: product})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
