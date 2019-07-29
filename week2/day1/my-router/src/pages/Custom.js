import React from "react";

export default class Custom extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div style={ {border: 'solid 5px blue'} }>
                custom
            </div>
        )
    }

}
