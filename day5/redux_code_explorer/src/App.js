import React from 'react';

import Provider from './components/Provider';
import Child from "./components/Child";

function App(props) {

  console.log(props)

  return (
    <div>
      app
      <Provider>
        <Child name="zhang" age={18}/>
        Hello
        <button name="btn"> click me</button>
      </Provider>
    </div>
  );
}

export default App;
