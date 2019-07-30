import state_struct from '../../state_struct';

export default function userOrderReducer(state = state_struct.getIn(['order', 'userOrder']), action) {
    // ...
    return state
}
