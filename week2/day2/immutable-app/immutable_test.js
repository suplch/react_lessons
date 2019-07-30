const Immutable = require('immutable'); // 导入 immutable 模块
const { fromJS, Map, List } = Immutable;  // 结构属性

const obj = {
    name: '李',
    age: 18,
    address: {
        city: '武汉',
        region: '江夏'
    },
    hobbies: [
        {name: 'JavaScript', desc: '是一种前端编程语言'},
        {name: '王者荣耀', desc: '一种流行手机游戏'},
    ]
};  // 原始 js 对象

//通过 immutable 的 fromJS 方法将原始 js 对象 转换为 immutable 对象
const imObj = fromJS(obj);
{   //      对 immutable 对象 进行修改 其本身不会发生变化, 而是 返回一个新对象
    //     imObj.name = '李'
    const newObj = imObj.set('name', '李');

    console.log(imObj);  // 打印 原始对象, 发现没有变化
    console.log(newObj);  // 新对象 发生了变化
    console.log('----------------')

// const addreessMap = imObj.get('address');
// const newAddress = addreessMap.set('city', '北京')
// const newObj111 = imObj.set('address', newAddress);

    //       setIn 方法可以使之 对象里面的深层次 属性 , 返回 变化后的新对象, 原始对象不变
    //              obj.address.city = '北京'
    const newObj111 = imObj.setIn(['address', 'city'], '北京');
    console.log(imObj);      // 打印 原始对象, 发现没有变化
    console.log(newObj111)   // 新对象 发生了变化
}

{
    console.log('===================')
    //                    类似  imObj.hobbies[1].name
    const newObj222 = imObj.setIn(['hobbies', 1, 'name'], '王者荣耀(腾讯)');
    console.log(imObj);     // 不变
    console.log(newObj222)  // 变
}

{
    console.log('||||||||||||||||||||||||||')
    //     update 方法修改 属性, 提供一个 回调函数, 参数为 属性的原始值, 染回值作为修改的值
    const newObj333 = imObj.update('hobbies', (hobbies) => {

        return hobbies.unshift(Map({     // 对象 hobbies 进行修改, 返回新对象
            name: 'LOL', desc: '电脑游戏'
        }))
    });
    console.log(imObj);
    console.log(newObj333)
}


console.log(imObj.get('address').get('region'))
//               类似  imObj.address.region
console.log(imObj.getIn(['address', 'region']))



const newObje555 = imObj.update('name', function (value) {
    return value + '三'
});
console.log('))))))))))))))))))')
console.log(imObj);
console.log(newObje555);

console.log('***********')

const newObj777 = imObj.set('name', '小王')
                       .set('age', 28);


console.log(imObj);
console.log(newObj777)
