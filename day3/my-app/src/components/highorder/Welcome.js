import React, {Component}  from 'react'
export default class Welcome extends Component {
    constructor(props) {
        super(props)
    }
    // 设置属性默认值
    static defaultProps = {
        count: 1,
        place: '中国'
    };
    render() {
        return (
            <div style={ {border: 'solid 5px red'} }>
                欢迎 {this.props.name} 第 {this.props.count} 次 来到 {this.props.place}
            </div>
        )
    }
}
