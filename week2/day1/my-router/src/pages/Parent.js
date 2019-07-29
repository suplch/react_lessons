import React from "react";
import { Route  } from 'react-router-dom';
import Child222 from './Child222';
import Child111 from './Child111';

export default class Parent extends React.Component {

    pay() {
        setTimeout(() => {
            // 通过 history.push 可以 以代码的方式 跳转地址
            this.props.history.push(`${this.props.match.url}/child222`)
        }, 1000)
    }
    render() {
        console.log(this.props)
        return (
            <div style={ {border: 'solid 5px red'} }>
                Parent
                <button onClick={e => this.pay()}>goto child222</button>

                <Route path={`${this.props.match.url}/child222`} component={Child222} />
                <Route path={`${this.props.match.url}/child111`} component={Child111} />
            </div>
        )
    }
}
