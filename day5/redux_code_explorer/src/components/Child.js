import React from 'react';

function Child(props) {
    return (
        <div>
            Child { props.name }, { props.age }, { props.gender}
        </div>
    );
}

Child.contextType = 'ok';

export default Child;
