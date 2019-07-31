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

//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import {observable, action} from 'mobx';
//
// import CounterApp from './CounterApp';
// // 定义一个可观察对象
// let obj = observable({
//     name: '张三',
//     count: 0
// });
// //              action 声明一个动作函数
// obj.resetCount = action(() => {
//     obj.count = 0;
// });
//
// setInterval(function () {
//     obj.count++;  // 每个一秒钟 修改 count 属性
// }, 1000);
//
// setTimeout(function () {
//     obj.name = '李四'
// }, 3000);
//
//
// ReactDOM.render(
//     <CounterApp obj={obj}/>, // 将可观察对象 传递给 组件
//     document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';

import ShopApp from './ShopApp';

ReactDOM.render(
    <ShopApp />,
    document.getElementById('root')
);
