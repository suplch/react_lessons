import React from 'react';

import { observer } from 'mobx-react'

import {connectMobx} from '../store'

const Hobbies = observer(class Hobbies extends React.Component {

    constructor(props) {
        super(props);

        this.nameRef = React.createRef();
        this.descRef = React.createRef();
    }

    addHobby() {

        const hobby = {
            name: this.nameRef.current.value,
            desc: this.descRef.current.value
        };

        this.nameRef.current.value = '';
        this.descRef.current.value = '';
        this.props.store.addHobby(hobby);
    }

    delHobby(hobby) {
        this.props.store.delHobby(hobby);
    }

    render() {
        const {name, age, address, hobbies} = this.props.store;
        return (
            <div>
                <ul>
                    {
                        hobbies.map((hobby, index) => {
                            return (
                                <li key={hobby.name}>
                                    {hobby.name}, {hobby.desc} 级别 {hobby.level}
                                    <button onClick={e => hobby.level++}>+</button>
                                    <button onClick={e => hobby.level--}>-</button>

                                    <button onClick={e => this.delHobby(hobby)}>删除</button>
                                    <button onClick={e => this.props.store.changeHobbyName(hobby)}> upper case</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <input ref={this.nameRef} />
                <input ref={this.descRef} />
                <button onClick={e => this.addHobby()}>添加爱好</button>
            </div>
        )
    }
});

export default connectMobx(Hobbies)

