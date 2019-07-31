import React from 'react';

import { observer } from 'mobx-react'

import {connectMobx} from './store'

import BaseInfo from './components/BaseInfo';
import Hobbies from './components/Hobbies'

const MobxApp = observer(class MobxApp extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <BaseInfo/>
                <hr/>
                <Hobbies/>
            </div>
        )
    }
});

export default connectMobx(MobxApp)

