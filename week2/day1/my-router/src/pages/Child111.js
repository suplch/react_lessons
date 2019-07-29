import React from "react";

export default class Child111 extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div style={ {border: 'solid 5px green'} }>
                Child 111
            </div>
        )
    }

}
