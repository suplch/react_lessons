
import { createStore } from 'redux'
import {fromJS, List, Map} from "immutable";

const imState = fromJS({
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
});

function reducer(state = imState, action) {

    switch (action.type) {
        case 'DEL_HOBBY':
            return state.update('hobbies', hobbies => {
                return hobbies.filter(hobby => {
                    return action.hobby !== hobby
                })
            });

            // return state.update('hobbies', (hobbies) => {
            //     // let position = hobbies.indexOf(action.hobby);
            //     // return hobbies.splice(position, 1);
            //
            //     return hobbies.filter((hobby) => {
            //         return action.hobby !== hobby
            //     })
            // });
        case 'ADD_HOBBY':
            return state.update('hobbies', hobbies => {
                return hobbies.push(Map(action.hobby))
            });
        default:
            return state
    }

}

const store = createStore(reducer);

export default store;
