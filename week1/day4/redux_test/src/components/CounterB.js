import React, {Component} from 'react'

import { connect } from 'react-redux';

class CounterB extends Component {


    render() {
        const {counterBBB, onInc, onDec} = this.props;
        return (
            <div>
                counter b { counterBBB }
                <button onClick={onInc}>+</button>
                <button onClick={onDec}>-</button>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counterBBB: state.CB
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onInc: () => {


            dispatch((dispatch, getState) => {

                setTimeout(function () {
                    console.log(getState());
                    dispatch({type: 'INC'});
                }, 1000);
            })

        },
        onDec: () => {
            dispatch({type: 'DEC'})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterB)

