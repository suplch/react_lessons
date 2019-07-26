import React from 'react';

import Provider from './components/Provider';
import Child from "./components/Child";

function App(props) {

  console.log(props)

    let myStore = {
      name: 'this is a store'
    };

  return (
    <div>
      app
      <Provider myStore={myStore}>
        <Child name="zhang" age={18}/>
        Hello
        <button name="btn"> click me</button>
          {
              (() => {
                  return <button>Hello button</button>
              })()
          }
          <hr/>
      </Provider>
    </div>
  );
}

export default App;
