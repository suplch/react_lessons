import React from 'react';

import Provider from './components/Provider';
import Father from "./components/Father";

function App(props) {

  console.log(props);

  return (
    <div>
      app
      <Provider>
          Hello
        <Father name="zhang" age={18}/>

      </Provider>
    </div>
  );
}

export default App;
