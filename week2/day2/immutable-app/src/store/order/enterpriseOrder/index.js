import state_struct from '../../state_struct';

export default function enterpriseOrderReducer(state = state_struct.getIn(['order', 'enterpriseOrder']), action) {
    // ....
    return state
}
