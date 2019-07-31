import React from 'react';
import { connect } from '../store';
class ShoppingCart extends React.Component{
    render() {
        const items = this.props.shop.shoppingCart.items;
        const addItemCount = this.props.shop.addItemCount;
        return (
            <div>
                购物车
                <ul>
                    {
                        items.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    名称:{item.name}, 价格: {item.price}, 数量: <b>{item.count}</b>
                                    <button onClick={e => addItemCount(item, 1)}>+</button>
                                    <button onClick={e => addItemCount(item, -1)}>-</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(ShoppingCart)
