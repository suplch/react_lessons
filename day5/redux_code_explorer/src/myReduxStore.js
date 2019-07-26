class Store {  // 定义一个 redux 存储库
    constructor(reducer, initialState) { // 构造函数, reducer 参数, 初始化 状态 参数
        this._state = initialState;
        this.reducer = reducer;
        this._listeners = [];  // 事件监听集合数组
    }
    getState() {
        return this._state;  // 返回 store 里的 state
    }
    subscribe(listener) {  // 订阅状态变化 事件
        this._listeners.push(listener);  // 将 订阅回调函数 push 到 事件监听 集合数组中
        return () => {  // 本 => 函数是一个反订阅处理函数, 用来 删除 不许到的订阅
            let position = this._listeners.indexOf(listener);
            this._listeners.splice(position)
        };
    }
    dispatch(action) { // 分发一个 action
        // 调用 reducer 函数 , 传递 state 和 action , 返回一个新的状态, 保持到 store
        this._state = this.reducer(this._state, action);
        // 循环遍历, 所有 监听事件, 使得 subscribe 订阅的函数 被 调用
        this._listeners.forEach((listener) => {
            listener()  // 执行其中一个 订阅的函数
        });
    }
}

function createStore(reducer) {
    return new Store(reducer);
}


function reducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(reducer);

 store.subscribe(function () {
    console.log('第一次 ', store.getState());
})();

 store.subscribe(function () {
    console.log('第二次 ', store.getState());
})();

let unsubscribe = store.subscribe(function () {
    console.log('第三次 ', store.getState());
});

//unsubscribe();
unsubscribe();
store.dispatch( { type: 'INCREMENT'} );
store.dispatch( { type: 'INCREMENT'} );
store.dispatch( { type: 'DECREMENT'} );
store.dispatch( { type: 'DECREMENT'} );
