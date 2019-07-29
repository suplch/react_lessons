
### context 状态树传参
```ecmascript 6

const MyContext = React.createContext(defaultValue);

<MyContext.Provider value={/* 某个值 */}>

</MyContext.Provider>

MyClass.contextType = MyContext;
this.context // 获取上下文参数

<MyContext.Consumer>
  {value => /* 基于 context 值进行渲染*/}
</MyContext.Consumer>

```

### 高阶组件(HOC)构建应用
- 高阶组件, 利用js高阶函数对现有组件进行增强扩展

### 生命周期
- 生命周期各个阶段
    + 初始化阶段
        - constructor
        - getDerivedStateFromProps(nextProps, prevState): nextState
        - render
        - componentDidMount
    + 运行中阶段
        - static getDerivedStateFromProps(nextProps, prevState): nextState
        - shouldComponentUpdate(nextProps, nextState): boolean
        - render
        - getSnapshotBeforeUpdate(prevProps, prevState): snapValue
        - componentDidUpdate(prevProps, prevState, snapshot)
    + 销毁阶段
        - componentWillUnmount


### Redux 状态管理
- https://www.redux.org.cn

- 实现全局状态管理
- 方便大型项目组件共享数据
- Action, Reducer, Store
```ecmascript 6
(state, action) => { return newState }
```

```ecmascript 6
const { createStore } = require('redux');

function counter(state = 0, action) {
    switch( action.type ) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
}

let store = createStore(counter);

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch({ type: 'INCREMENT'});

```
### React Redux 集成
```ecmascript 6
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

function reducerA(state = 0, action) {
    return state;
}

function reducerB(state = 0, action) {
    return state;
}

const appReducer = combineReducers({
    moduleA: reducerA,
    moduleB: reducerB
});

let store = createStore(appReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
```
```ecmascript 6
import { connect } from 'react-redux';
// 映射 state 到 组件 props
const mapStateToProps = (state) => {
    return {
        property: state.property
    }
};
// 映射 dispatch 到 组件 props
const mapDispatchToProps = (dispatch) => {
    return {
        onEvent: () => {
            dispatch({type: 'ACTION_NAME'});
        }
    }
};
//   高阶函数包装组件, 导出被包装的组件
export default connect(mapStateToProps, mapDispatchToProps)(组件)

```
### Redux-thunk
- https://github.com/reduxjs/redux-thunk
- 实现 redux 的 异步操作
```ecmascript 6
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

//...
dispatch({type: 'INC'});
// 或者, 异步调用
dispatch((dispatch, getState) => {

    setTimeout(function () {
        console.log(getState());
        dispatch({type: 'INC'});
    }, 1000);
})
```
