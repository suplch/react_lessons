
import React from 'react';

function match(path, realPath) {
    debugger;
    let ps = path.split('/');
    let rps = realPath.split('/');
    if (ps.length !== rps.length) {
        return null;
    }
    let isMatch = true;
    let params = {};
    for (let i = 0; i < rps.length; i++) {
        let rp = rps[i];
        let p = ps[i];
        if (p.startsWith(':')) {
            params[p.substr(1)] = rp
        } else {
            if (p !== rp) {
                isMatch = false;
            }
        }
    }
    if (isMatch) {
        return params;
    }
    return null;
}
export class MyRoute extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        console.log(props)
    }
    render() {
        debugger;
        // 获取 参数 路径 path 参数, 和组件 component 参数
        const {path, component} = this.props;
        // 将组件 component 保持到 大写字符开头的变量
        const Component = component;
        let comp = null;
        console.log(path);
        console.log(window.location.pathname);
        let params = match(path, window.location.pathname);
        let matchObj = {
            params
        };
        if (params) {  // 如果 路径匹配了, 实例化一个 Component
            comp = <Component match={ matchObj } />
        }
        return (
            <div>
                {comp}
            </div>
        )
    }
}
