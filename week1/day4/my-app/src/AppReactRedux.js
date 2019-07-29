import React from 'react';
import { connect } from 'react-redux'

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        props.addCount();
    }
    render() {
        return (
            <div>
                { this.props.count }
                <button onClick={e => this.props.addCount()}>+</button>
                <button onClick={e => this.props.decCount()}>-</button>
            </div>
        )
    }
}
// 将 state 数据映射 为 组件 的 props 参数
function mapStateToProps(state) {
    return {
        count: state
    }
}
// 将 dispatch 映射 为 组件 的 props 参数
function mapDispatchToProps(dispatch) {
    return {
        addCount() {
            dispatch( { type: 'INCREMENT' } )
        },
        decCount() {
            dispatch( { type: 'DECREMENT'} )
        }
    }
}
// connect 函数 将 两个 映射 方法连接 到一块, 返回 一个高阶函数,
const componentConnector =  connect(mapStateToProps, mapDispatchToProps);
//     高阶函数 对原始组件进行包装, 使得原始组件可以 直接通过 props 访问 数据 和 方法
export default componentConnector(App);


// function connect(mapStateToProps, mapDispatchToProps) {
//
//     return function (AppComponent) {
//         return class WrapComponent extends React.Component {
//             render() {
//                 let store = this.context
//                 let state = store.getState()
//                 let props1 = mapStateToProps(state);
//                 let dispatch = store.dispatch;
//                 let props2 = mapDispatchToProps(dispatch)
//
//                 let props = {...props1, ...props2}
//
//
//                 return (
//                     <AppComponent {...props} />
//                 )
//
//             }
//         }
//     }
// }

