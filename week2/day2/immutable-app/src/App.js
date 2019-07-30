import React from 'react';
import { connect } from 'react-redux';
function App(props) {
  console.log(props)
  
  function addHobby() {
    props.addHobby({
      name: 'CSS',
      desc: '美化语言'
    })
  }
  
  return (
    <div>
      {props.name}
      <ul>
        {
          props.hobbies.map((hobby) => {
            return <li key={hobby.name}>{hobby.name}, {hobby.desc}  <button onClick={e => props.delHobby(hobby)}>del hobby</button></li>
          })
        }
      </ul>
      <button onClick={addHobby}>Add Hobby</button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    name: state.get('name'),
    hobbies: state.get('hobbies').toJS()
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addHobby(hobby) {
      dispatch({ type: 'ADD_HOBBY', hobby})
    },
    delHobby(hobby) {
      dispatch( {type: 'DEL_HOBBY', hobby})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

