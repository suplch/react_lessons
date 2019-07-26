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

function postAddProduct(product) {

    return  new Promise(function (resolve, reject) {

        setTimeout(function () {
            resolve({...product, id: '1223432424'})
        }, 3000)

    });
}


function mapDispatchToProps(dispatch) {
    return {
        pickProduct(product) {
            dispatch( { type: 'PICK_PRODUCT',  product: product} )
        },
        async addProduct(product) {
            // 当dispatch 接受到的是一个 回调函数, 那么 dispatch 返回 Promise
            //  用来处理复杂异步操作
            /*
            dispatch((dispatch, getState) => {

                return postAddProduct(product).then(function (result) {
                    dispatch( { type: 'ADD_PRODUCT',  product: result} )
                });

            }).then(function () {
                console.log('Done!');

            })
            */

            await dispatch(async (dispatch, getState) => {

                let result = await postAddProduct(product);
                dispatch( { type: 'ADD_PRODUCT',  product: result} );

                // return postAddProduct(product).then(function (result) {
                //     dispatch( { type: 'ADD_PRODUCT',  product: result} )
                // });

            });
            console.log('Done!');


        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
