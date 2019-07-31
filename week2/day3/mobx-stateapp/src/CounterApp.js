import React from 'react';
// 导入 mobx 的 react 桥接工具
import { observer } from 'mobx-react';

class CounterApp extends React.Component{

    render() {
        console.log(this.props.obj);
        console.log(this.props.obj.name);

        return (
            <div>
                counter
                姓名: {this.props.obj.name}
                { this.props.obj.count }
                <button onClick={e => this.props.obj.resetCount()} >重置</button>
            </div>
        )
    }
}

//  observer 高阶函数, 对组件进行高阶处理
export default observer(CounterApp)
