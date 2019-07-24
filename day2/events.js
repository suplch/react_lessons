const EventEmitter = require('events');


const eventBus = new Vue();

eventBus.on('addGoods', (data) => {
    console.log('添加 购物车', data);
});



eventBus.emit('addGoods', {
    goods: {
        name: '电脑',
        price: 10000
    }
});
