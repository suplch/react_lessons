import React from "react";

export default class UserDetail extends React.Component {
    render() {
        // 通过 match 对象可以接收到参数
        const { match }  = this.props;
        console.log(this.props);
        return (
            <div>  { /* 接收 uid 参数 通过 match.params */  }
                detail { match.params.uid}
            </div>
        )
    }
}
