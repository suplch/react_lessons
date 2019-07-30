import React from 'react'
import { connect } from 'react-redux';

class ShopApp extends React.Component{
    constructor(props) {
        super(props)

    }

    render() {

        return (
            <div>
                <ul>
                    {
                        this.props.products.map((product) => {
                            return (
                                <li key={product.get('id')}>{product.get('name')}, {product.get('price')}
                                    <button onClick={e => this.props.pickProduct(product)}>add</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <ul>
                    {
                        this.props.items.map((item) => {
                            return (
                                <li key={item.get('id')}>{item.get('name')}, {item.get('price')}, 数量{item.get('count')}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state);
    return {
        products: state.getIn(['goods', 'products']),
        items: state.getIn(['shoppingCart', 'items'])
    }
}
function mapDispatchToProps(dispatch) {
    return {
        pickProduct(product) {
            dispatch({ type: 'PICK_PRODUCT', product })
        }
    }
}
const linkComponent = connect(mapStateToProps, mapDispatchToProps);
const newImReduxApp = linkComponent(ShopApp);
export default newImReduxApp;
