import React  from 'react';
import LifeCycleComponent from './components/LifeCycleComponent';
export default class AppLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            count: 0,
            name: 'zhang',
            age: 18
        }
    }
    switchShow() {
        this.setState({
            show: !this.state.show
        })
    }
    addCount() {
        this.setState({
            count: this.state.count + 1
        });
    }
    addAge() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        return (
            <div>
                life cycle
                <button onClick={e => this.switchShow()}> 切换 </button>
                <button onClick={e => this.addCount()}> add {this.state.count} </button>
                <button onClick={e => this.addAge()}> add 年龄 </button>
                {
                    this.state.show ?
                        <LifeCycleComponent
                            name={this.state.name}
                            age={this.state.age}/> : null
                }
            </div>
        )
    }
}
