import React, {Component}  from 'react'
export default class GoodBye extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={ {border: 'solid 5px red'} }>
                再见, 欢迎下次光临
            </div>
        )
    }
}
