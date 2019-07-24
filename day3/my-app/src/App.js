import React from 'react';

import MyContext from './MyContext';
import Grandpa from './components/Grandpa';

// 结构出 Provider 组件 用来提供上下文数据
const { Provider } = MyContext;

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: 'welcome',
      shoppingCart: {
        items: [
          {id: '111', name: '电脑'},
          {id: '222', name: '键盘'},
        ]
      }
    }
  }
  changeMsg() {
    this.setState({
      message: 'welcome to wuhan',
    })
  }

  testMethod(argv) {
    console.log(argv, this)
  }

  render() {
    let state = this.state;

    //state.testMethod = this.testMethod.bind(this);
    state.testMethod = (argv) => { this.testMethod(argv) };



    console.log(MyContext);
    return (
        <div>
          {state.message}
          <button onClick={e => this.changeMsg()}>
            修改
          </button>
          {/* Provider 提供 上下文数据, 供整个 app 组件使用  */}
          <Provider value={state}>
            <Grandpa/>
          </Provider>

        </div>
    )
  }
}

export default App;
