import React from 'react';
//
import { createStore } from 'redux';

function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}
// 创建 状态 存储库 store
const store = createStore(counter);

class App extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            count: store.getState()
        };
      store.subscribe(() => { // 订阅 数据, 当 发生了 状态变化 , 更新 组件 的state 数据
          this.setState({
              count: store.getState()
          })
      });
  }
  addCount() { // 当 点击 + 号按钮 的时候 调用 dispatch 增加
      store.dispatch( { type: 'INCREMENT'} );
  }
  decCount() { // 当 点击 - 号按钮 的时候 调用 dispatch 增加
      store.dispatch( { type: 'DECREMENT'} );
  }
  render() {
    return (
        <div>
            <button onClick={e => this.addCount()}>+</button>
            <button onClick={e => this.decCount()}>-</button>
            { this.state.count }

        </div>
    )
  }
}

export default App;
