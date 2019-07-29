import React, {Component} from 'react'

import { connect } from 'react-redux';

class CounterA extends Component {

    render() {

        const {counterAAA, onAddClick, onDecClick} = this.props;


        return (
            <div>
                count a : { counterAAA }
                <button onClick={onAddClick}>INCREMENT</button>
                <button onClick={onDecClick}>DECREMENT</button>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        counterAAA: state.CA,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: () => {
            dispatch({type: 'INCREMENT'});
        },
        onDecClick: () => {
            dispatch({type: 'DECREMENT'});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterA)
