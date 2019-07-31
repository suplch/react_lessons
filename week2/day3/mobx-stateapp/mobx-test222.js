const { observable, autorun, decorate, computed, when, reaction } = require('mobx');
//                对一个数组进行观察
let arr = observable(['hello', 'world']);

//  autorun 注册一个回到函数, 当 可观察的属性发生改变的时候, 我们的回调函数就会被执行
autorun(() => {
    console.log(arr)
});
arr.push('goodbye');
arr.splice(1,1);

let numberlist = observable([2,4,6]);
// computed 可以用来定义一个计算对象, 返回一个计算对象, 计算对象通过 调用 got() 方法来发挥值
let sum = computed(() => {
    let total = 0;
    for (let num of numberlist){
        total += num
    }
    return total;
});

//  autorun 注册一个回到函数, 当 可观察的属性发生改变的时候, 我们的回调函数就会被执行
autorun(() => {                //  sum 调用 get 返回计算结果
    console.log(numberlist, 'sum = ', sum.get())
});

numberlist.push(8);
