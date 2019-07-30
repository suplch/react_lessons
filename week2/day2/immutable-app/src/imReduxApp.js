import React from 'react'
import { connect } from 'react-redux';
class ImReduxApp extends React.Component{
    constructor(props) {
        super(props)
        this.nameRef = React.createRef();
        this.descRef = React.createRef();
    }
    delHobby(hobby) {
        this.props.delHobby(hobby)
    }
    addHobby() {
        const hobby = {
            name: this.nameRef.current.value,
            desc: this.descRef.current.value
        };
        this.props.addHobby(hobby);
    }
    render() {
        const {name, age} = this.props;
        const { city, region } = this.props.address;
        return (
            <div>
                姓名: {name}, 年龄: {age}
                {city}, {region}
                <ul>
                    {
                        this.props.hobbies.map((hobby, index) => {
                            return (
                                <li key={hobby.get('name')}>
                                    {hobby.get('name')},
                                    {hobby.get('desc')}
                                    <button onClick={e => this.delHobby(hobby)}> del</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <input ref={this.nameRef}/>
                <input ref={this.descRef}/>
                <button onClick={e => this.addHobby()}> add hobby</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        name: state.get('name'),
        age: state.get('age'),
        address: state.get('address').toJS(),
        hobbies: state.get('hobbies')
    }
}
function mapDispatchToProps(dispatch) {
    return {
        delHobby(hobby) {
            dispatch({ type: 'DEL_HOBBY', hobby: hobby} )
        },
        addHobby(hobby) {
            dispatch( { type: 'ADD_HOBBY', hobby: hobby } )
        }
    }
}
const linkComponent = connect(mapStateToProps, mapDispatchToProps);
const newImReduxApp = linkComponent(ImReduxApp);
export default newImReduxApp;
