import React from 'react';


function Provider(props) {
    console.log(props);
debugger
    let i = 0;
    for (let el of props.children) {
        if (typeof el.type === 'function') {
            el.type.prototype.testData = props.myStore
        }
        i++;
    }

    return (
        <div>
            { props.children }
        </div>
    );
}

export default Provider;
