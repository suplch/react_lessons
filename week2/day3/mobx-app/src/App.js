import React from 'react';

import { observer } from 'mobx-react'


const App = observer(class App extends React.Component {

  render() {
    return (
        <div>
          <h1>计时器: {this.props.appState.timer}</h1>
          <h2> { this.props.appState.name } </h2>
          <button onClick={e => this.props.appState.resetTimer()} >复位</button>
        </div>
    )
  }
});

export default App;
