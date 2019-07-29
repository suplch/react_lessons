import React from 'react';
import {connect} from "react-redux";


class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let total = 0;
        let lis = this.props.items.map((item, index) => {
            total += item.price * item.count;
            return (
                <li key={item.id}>
                    { item.name }, 价格: { item.price}, 数量: {item.count}  合计 { item.price * item.count }
                </li>
            )
        });
        return (
            <div>
                <ul>
                    {lis}
                </ul>
                总计 : {total}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        items: state.shoppingCart.items
    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
