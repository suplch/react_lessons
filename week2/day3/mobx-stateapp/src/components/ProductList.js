import React from 'react';
import { connect } from '../store';
class ProductList extends React.Component{
    render() {
        const products = this.props.shop.goods.products;
        const pickProduct = this.props.shop.pickProduct.bind(this.props.shop);
        return (
            <div>
                <ul>
                    {
                        products.map((product, index) => {
                            return (
                                <li key={product.id}>
                                    {product.name}, {product.price}
                                    <button onClick={e => pickProduct(product)}>
                                        添加购物车
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        )
    }
}
export default connect(ProductList)
