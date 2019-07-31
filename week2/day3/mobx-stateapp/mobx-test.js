const { observable, autorun, decorate, computed, when, reaction } = require('mobx');

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        //  autorun 注册一个回到函数, 第一次会立刻执行
        //  以后 当可观察的属性发生改变的时候, 我们的回调函数就会被执行
        autorun(() => {
            console.log(this.firstName, this.lastName, this.age, this.fullname);
        })
    }
    // get 关键字 es6 提供语法 用来声明一个只读属性
    get fullname() {
        return this.firstName + ' ' + this.lastName;
    }
}
// 用来修饰一个类, 通过第二个参数来指定 类里面属性 是可被观察的,
// 当这些可被观察的属性发生变化以后, 我们可以同 autorun 方法来监听到
decorate(Person, {
    firstName: observable,   // observable 指示一个属性 是 可观察的
    lastName: observable,    // observable 指示一个属性 是 可观察的
    age: observable,         // observable 指示一个属性 是 可观察的
    fullname: computed       // 声明 一个 计算属性
});


let p1 = new Person('张', '三', 18);

p1.firstName = '李';
p1.lastName = '四';
p1.age = 28;

//  autorun 注册一个回到函数,  第一次会立刻执行
//  以后 当可观察的属性发生改变的时候, 我们的回调函数就会被执行
autorun(() => {
    console.log('later   >>> ', p1.firstName, p1.lastName, p1.age);
});

p1.age = 100;
