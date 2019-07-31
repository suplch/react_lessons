// import React from 'react';
// import ReactDOM from 'react-dom';
// import {observable, action} from 'mobx';
//
// import App from './App'
//
//
// let appState = observable({
//     timer: 0,
//     name: '张三'
// });
//
// setInterval(action(() => {
//     appState.timer += 1;
// }), 1000);
//
// appState.resetTimer = action(() => {
//     appState.timer = 0;
// });
//
// ReactDOM.render(
//     <App appState={appState} />,
//     document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';

import App from './mobxApp';


ReactDOM.render(
    <App/>,
    document.getElementById('root'));
