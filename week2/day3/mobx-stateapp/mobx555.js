const { observable, autorun, decorate, computed, when, reaction } = require('mobx');
const todos = observable([
    {title: "吃饭", done: false,},
    {title: "睡觉", done: false},
    {title: "做作业", done: false}
]);
// 当 数据发生变化的时候执行, 默认不执行, 第一个回调函数的返回值 作为第二个回调函数的参数,
// 第二回调函数, 第二个参数, 可以撤销到当前 reaction 监听  通过调研 dispose 方法
reaction(function () {
    let count = 0;
    for (let todo of todos) {
        count += todo.done ? 1 : 0
    }
    return count;
}, function (finishedCount, reaction) {
    console.log(`完成了${finishedCount}任务`)
    if (finishedCount >= 2) {
        reaction.dispose(); // 撤销掉 reaction 监听
    }
});
todos[0].done =true;
todos[1].done =true;
todos[2].done =true;



// let obj = observable({
//     message: 'hello'
// });
//
// reaction(function () {
//     return obj.message
// }, function (argv) {
//     console.log(argv)
// });
//
// setTimeout(function () {
//     obj.message = 'goodbye';
// }, 3300)


