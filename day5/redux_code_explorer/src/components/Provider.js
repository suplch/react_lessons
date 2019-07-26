import React from 'react';


function Provider(props) {
    console.log(props);

    for (let el of props.children) {
        debugger;
        console.log(el.type)
    }

    return (
        <div>
            { props.children }
        </div>
    );
}

export default Provider;
