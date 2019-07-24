import React from 'react';
import Welcome from './components/highorder/Welcome'
// 创建一个高阶组件, 对现有的组件进行扩展
function createWelcomeTo(place, WelcomeComponent) {
    return function (props) { // 返回函数式高阶组件
        return (
            <WelcomeComponent name={props.name} place={place}  />
        )
    }
}
// 创建一个高阶组件, 对现有的组件进行扩展
function createWelcomePerson(name, WelcomeComponent) {
    return class Wrap extends React.Component { // 返回 class 类型的组件
        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        addCount() {
            this.setState({
                count: this.state.count + 1
            })
        }
        render() {
            const { place } = this.props;
            const { count } = this.state;
            return (
                <div style={ {border: 'solid 5px green'} }>
                    wrap
                    <button onClick={e => this.addCount()}> + </button>
                    { count }
                    <WelcomeComponent name={name} place={place} count={count} />
                </div>

            )
        }
    }
}
// 创建一个新的高阶组件, 将 Welcome 组件 的 place 属性进行固定
const WelcomeWuhan = createWelcomeTo('武汉', Welcome);
const WelcomeBeijing = createWelcomeTo('北京', Welcome);
// 创建一个新的高阶组件, 将 Welcome 组件 的 name 属性进行固定
const WelcomeXiaozhang = createWelcomePerson('小张', Welcome);
const WelcomeXiaoli = createWelcomePerson('小李', Welcome);

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                appRoot
                {/* 直接使用组件 */}
                <Welcome name="张三" place="武汉" />
                <hr/>
                {/* 使用固定place 属性的高阶组件 */}
                <WelcomeWuhan name="李四" />
                <hr/>
                {/* 使用固定place 属性的高阶组件 */}
                <WelcomeBeijing name="小王" />
                <hr/>
                {/* 使用固定 name 属性的高阶组件 */}
                <WelcomeXiaozhang place="中国" />
                <hr/>
                {/* 使用固定 name 属性的高阶组件 */}
                <WelcomeXiaoli place="美国" />
            </div>
        )
    }
}
export default App;
