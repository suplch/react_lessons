import React  from 'react';

export default class LifeCycleComponent extends React.Component {

    constructor(props) {
        super(props);

        this.divRef = React.createRef();


        this.state = {
            count: 0
        };

        console.log('constructor 构造函数被调用');
        alert('constructor 构造函数被调用');
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        console.log('getDerivedStateFromProps, nextProps = ', nextProps);
        console.log('getDerivedStateFromProps, prevState = ', prevState);
        alert('getDerivedStateFromProps');
        return prevState;
    }

    addCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate  nextProps = ', nextProps);
        console.log('shouldComponentUpdate nextState = ', nextState);

        console.log('shouldComponentUpdate  props = ', this.props);

        return nextProps.name !== this.props.name || nextProps.age !== this.props.age;
    }

    render() {
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

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate  prevProps = ", prevProps);
        console.log("getSnapshotBeforeUpdate  prevState = ", prevState);
        alert(this.divRef.current.innerHTML);

        return this.divRef.current.offsetWidth;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate prevProps = ', prevProps);
        console.log('componentDidUpdate prevState = ', prevState);
        console.log(snapshot);
    }

    componentDidMount() {
        console.log('componentDidMount, 组件已经被挂载');
        alert('componentDidMount, 组件已经被挂载');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        alert('componentWillUnmount')
    }
}
