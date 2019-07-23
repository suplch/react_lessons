import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      message: 'welcome'
    }
  }

  render() {
    return (
        <div>
          我的第一个脚手架 { this.state.message }
        </div>
    )
  }
}


export default App;
