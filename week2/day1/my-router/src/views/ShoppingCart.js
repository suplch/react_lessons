import React from 'react';

import {connect} from "react-redux";

class ShoppingCart extends React.Component {

    render() {
        console.log(this.props)

        const lis = this.props.items.map((item) => {
            return (
                <li key={item.id}>
                    {item.name}, { item.price}, { item.count}
                </li>
            )
        });
        return (
            <div>
                <ul>
                    {lis}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.shoppingCart.items
    }
}

export default connect(mapStateToProps, null)(ShoppingCart)
