import React  from 'react';
export default class LifeCycleComponent extends React.Component {
    constructor(props) {
        super(props);
        debugger;
        this.divRef = React.createRef();
        this.state = {count: 0};
        console.log('constructor 构造函数被调用');
        alert('constructor 构造函数被调用');
    }
    static getDerivedStateFromProps(nextProps, prevState) { // 获取到外部参数是 调用, 来确定下一个数据状态
        debugger;
        console.log('getDerivedStateFromProps, nextProps = ', nextProps);
        console.log('getDerivedStateFromProps, prevState = ', prevState);
        alert('getDerivedStateFromProps');
        return prevState;  // 返回下一步的数据状态
    }
    addCount() {
        debugger;
        this.setState({
            count: this.state.count + 1
        })
    }
    shouldComponentUpdate(nextProps, nextState) { // 控制 是否需要 渲染 当前组件
        debugger;
        console.log('shouldComponentUpdate  nextProps = ', nextProps);
        console.log('shouldComponentUpdate nextState = ', nextState);
        console.log('shouldComponentUpdate  props = ', this.props);
        return nextProps.name !== this.props.name || nextProps.age !== this.props.age || nextState.count !== this.state.count
    }
    render() {
        debugger;
        console.log('render 渲染被调用');
        alert('render 渲染被调用');
        return (
            <div ref={this.divRef} style={ {border: 'solid 5px red', width: '200px', height: '200px'} }>
                life cycle  Count:  { this.state.count }
                姓名 {this.props.name}, 年龄: {this.props.age}
                <button onClick={e => this.addCount()}> + </button>
            </div>
        )
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { // 真正渲染UI前给程序猿 一个机会去获取当前ui 的 dom 状态
        debugger;
        console.log("getSnapshotBeforeUpdate  prevProps = ", prevProps);
        console.log("getSnapshotBeforeUpdate  prevState = ", prevState);
        alert(this.divRef.current.innerHTML);

        return this.divRef.current.offsetWidth;
    }
    componentDidUpdate(prevProps, prevState, snapshot){ // 当数据模型修改介绍后 调用
        debugger;
        console.log('componentDidUpdate prevProps = ', prevProps);
        console.log('componentDidUpdate prevState = ', prevState);
        console.log(snapshot);
    }
    componentDidMount() { // 当组件挂载到 父组件的时候调用
        debugger;
        console.log('componentDidMount, 组件已经被挂载');
        alert('componentDidMount, 组件已经被挂载');
    }
    componentWillUnmount() {  // 当组件卸载的时候调用
        debugger;
        console.log('componentWillUnmount');
        alert('componentWillUnmount')
    }
}
