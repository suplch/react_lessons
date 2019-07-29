import React, { Component } from 'react';

import Son from './Son';

export default  class Father extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="Father">
                Father
                <Son/>
            </div>
        )
    }
}
