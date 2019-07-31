const { observable, autorun, decorate, computed, when, reaction } = require('mobx');
//    对一个对象进行观察
let p1 = observable.object({
    firstName: '张',
    lastName: '三',
    age: 18,
    // get 关键字 es6 提供语法 用来声明一个只读属性
    get fullname() {
        return this.firstName + ' ' + this.lastName
    }
});
autorun(() => {
    console.log('###########');
    console.log(p1.firstName, p1.lastName, p1.age, p1.fullname);
});
p1.firstName = '李';
p1.lastName = '四';
p1.age = 28;
