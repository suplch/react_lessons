import React from 'react';
import {connect} from "react-redux";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.idRef = React.createRef();
        this.nameRef = React.createRef();
        this.priceRef = React.createRef();
    }
    addProduct() {
        let product = {
            id: this.idRef.current.value,
            name: this.nameRef.current.value,
            price: this.priceRef.current.value
        };
        this.idRef.current.value = '';
        this.nameRef.current.value = '';
        this.priceRef.current.value = '';
        this.props.addProduct(product)
    }

    render() {
        const lis = this.props.products.map((product, index) => {
            return (
                <li key={product.id} >
                    { product.name } 价格: { product.price}, 数量: {product.count}
                    <button onClick={e => this.props.pickProduct(product)}>添加购物车</button>
                </li>
            )
        });
        return (
            <div>
                id: <input ref={this.idRef} type='text' />
                name: <input ref={this.nameRef} type='text' />
                price: <input ref={this.priceRef} type='text' />
                <button onClick={e => this.addProduct()} >添加 商品</button>
                <ul>
                    {lis}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        products: state.goods.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pickProduct(product) {
            dispatch( { type: 'PICK_PRODUCT',  product: product} )
        },
        addProduct(product) {
            dispatch( { type: 'ADD_PRODUCT',  product: product} )
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
