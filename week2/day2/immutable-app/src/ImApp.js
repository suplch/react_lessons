import React from 'react'
import { fromJS, Map, List } from 'immutable';
export class ImApp extends React.Component{

    constructor(props) {
        super(props)

        this.nameRef = React.createRef();
        this.descRef = React.createRef();

        let obj = {
            name: '李',
            age: 18,
            address: Map({
                city: '武汉',
                region: '江夏'
            }),
            hobbies: List([
                Map({name: 'JavaScript', desc: '是一种前端编程语言'}),
                Map({name: '王者荣耀', desc: '一种流行手机游戏'}),
            ])
        };
        this.state = obj
    }

    addHobby() {
        let hobbyName = this.nameRef.current.value;
        let hobbyDesc = this.descRef.current.value;

        let newHobbies = this.state.hobbies.push(Map({
            name: hobbyName,
            desc: hobbyDesc
        }));


        this.setState({
            hobbies: newHobbies
        });
    }

    render() {

        const name = this.state.name;
        const age = this.state.age;

        const city = this.state.address.get('city');
        const region = this.state.address.get('region');

        const hobbies = this.state.hobbies;
        return (
            <div>
                name: {name}, age: {age}
                地址: {city}, {region}
                <ul>
                    {
                        hobbies.map((hobby, index) => {
                            return <li key={hobby.get('name')}>{hobby.get('name')}, {hobby.get('desc')}</li>
                        })
                    }
                </ul>
                <input ref={this.nameRef}/>
                <input ref={this.descRef}/>
                <button onClick={e => this.addHobby()}>添加爱好</button>

            </div>
        )
    }
}
