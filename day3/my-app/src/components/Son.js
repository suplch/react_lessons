import React, { Component } from 'react';

import MyContext from '../MyContext';
const { Consumer } = MyContext;

export default  class Son extends Component {
    constructor(props) {
        super(props)
    }
    // 告诉当前组件, 你可以使用 MyContext 上下文对象, 获取它的数据
    static contextType = MyContext;

    render() {
        //  this.context 属性可以获取到 上下文数据
        console.log('Son ', this.context);

        return (
            <MyContext.Consumer>
                {
                    (value) => {
                        return (
                            <div className="Son">
                                Son { value.message }
                                <ul>
                                    {
                                        value.shoppingCart.items.map((item) => {
                                            return (
                                                <li key={item.id}>{item.name}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    }
                }

            </MyContext.Consumer>
        )


        /*
        return (
            <div className="Son">
                Son { value.message }

                <ul>
                    {
                        value.shoppingCart.items.map((item) => {
                            return (
                                <li key={item.id}>{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
        */


    }
}
