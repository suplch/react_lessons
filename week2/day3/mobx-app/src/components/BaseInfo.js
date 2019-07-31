import React from 'react';

import { observer } from 'mobx-react'

import {connectMobx} from '../store'

const BaseInfo = observer(class BaseInfo extends React.Component {

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

        this.props.store.addHobby(hobby);
    }

    delHobby(hobby) {
        this.props.store.delHobby(hobby);
    }

    render() {
        const {name, age, address, hobbies} = this.props.store;
        return (
            <div>
                姓名: { name }, 年龄: <button onClick={e => this.props.store.addAge()}>{age}</button><br/>
                地址 <b>{ address.city }</b>市, {address.region} 区<br/>

            </div>
        )
    }
});

export default connectMobx(BaseInfo)

