const { observable, autorun, decorate, computed, when, reaction } = require('mobx');
class Todo {
    constructor() {
        this.index = 0;
        this.todos = [
            {text: '做作业', done: false},
            {text: '吃饭', done: false},
        ];
        for (let todo of this.todos) {
            // 等 第一个回调 饭后 true 的时候 , 执行第二个回到, 否则一直等待, 直到 第一个回调返回 true
            when(() => {
                return todo.done;
            }, () => {
                console.log(`一个${todo.text}任务已经完成`)
            });
        }
    }
    finish(index) {
        this.index = index;
        this.todos[index].done = true;
    }
}
decorate(Todo, {
    todos: observable
});
let todo = new Todo();
setTimeout(function () {
    todo.finish(0)
}, 2000);
setTimeout(function () {
    todo.finish(1)
}, 3000);




