const { observable, autorun, decorate, computed, when, reaction } = require('mobx');
let taskObj = observable({
    test: '做作业',
    done: false
});
const 当 = when;
// 等 第一个回调 饭后 true 的时候 , 执行第二个回到,
// 否则一直等待, 直到 第一个回调返回 true
when(function () {
    console.log('等待');
    return taskObj.done;
}, function () {
    console.log('finished')
});

setTimeout(function () {
    taskObj.done = true
}, 3000);
