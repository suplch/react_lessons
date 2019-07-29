import React from 'react';

export default class CCC extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props);
        debugger;
        console.log(this);
        return (
            <div>
                ccc
            </div>
        )
    }
}
