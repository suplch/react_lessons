import React from 'react';


function Provider(props) {

    console.log(props);

    return (
        <div>
            { props.children }
        </div>
    );
}

export default Provider;
