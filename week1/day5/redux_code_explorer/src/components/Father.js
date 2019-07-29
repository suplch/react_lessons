import React from 'react';
import Child from './Child';

class Father extends React.Component {

    render() {

        return (
            <div>
                Father
                <Child/>
            </div>
        )
    }
}


export default Father
