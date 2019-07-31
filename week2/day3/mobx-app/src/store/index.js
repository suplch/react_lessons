import {observable, action} from 'mobx';
import React from 'react';

let appState = observable({
    name: '张',
    age: 18,
    address: {
        city: '武汉',
        region: '秀湖'
    },
    hobbies: [
        {name: '王者荣耀', desc: '一款手机游戏', level: 1},
        {name: 'lol', desc: '电脑游戏', level: 1},
    ],

    changeHobbyName(hobby) {
        hobby.name = hobby.name.toUpperCase();
    },

    addHobby(hobby) {
        this.hobbies.push(hobby);
    },

    delHobby(hobby) {
        let position = this.hobbies.indexOf(hobby);
        this.hobbies.splice(position, 1);
    },

    addAge() {
        this.age++;
    }
});

export default appState

export function connectMobx(WrapComponent) {

    return function (props) {
        return (
            <WrapComponent {...props} store={appState} />
        )
    }
}
