import React, { Component } from 'react';

//import MyContext from '../MyContext';

import Father from './Father';

export default  class Grandpa extends Component {

    constructor(props) {
        super(props)
    }

    // 告诉当前组件, 你可以使用 MyContext 上下文对象, 获取它的数据
    //static contextType = MyContext;

    render() {
        return (
            <div className="Grandpa">
                Grandpa
                <Father/>
            </div>
        )
    }


    // render() {
    //
    //
    //     return (
    //         <MyContext.Consumer>
    //             {
    //                 (value) => {
    //                     return (
    //                         <div className="Grandpa">
    //                             Grandpa  { value }
    //                             <Father/>
    //                         </div>
    //                     )
    //                 }
    //             }
    //         </MyContext.Consumer>
    //
    //
    //     )
    // }
}

// Grandpa.contextType = MyContext;
