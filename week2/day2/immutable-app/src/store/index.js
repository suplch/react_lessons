
import { createStore } from 'redux';

import { fromJS } from 'immutable';

const initState = fromJS({
    name: '张三',
    address: {
        city: '',
        region: ''
    },
    hobbies: [{
        name: 'JavaScript',
        desc: '一门前端语言'
    }]
});


function reducer(state = initState, action) {
    switch (action.type) {
        case 'ADD_HOBBY':
            // const hobbies = state.get('hobbies').push(fromJS(action.hobby))
            // return state.set('hobbies', hobbies)
            return state.update('hobbies', hobbies => hobbies.push(fromJS(action.hobby)));
        case 'DEL_HOBBY':
            console.log(action.hobby);
            return state.update('hobbies', hobbies => hobbies.filter(hobby => hobby.get('name') !== action.hobby.name))

        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
