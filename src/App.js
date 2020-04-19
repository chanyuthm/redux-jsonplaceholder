import React from 'react';
import {connect} from 'react-redux'
import {fetchusers} from './redux/_actions/actions'

function App(props) {
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={props.fetchdata}>Fetch_User</button>
      {
        props.users.map((user, index) =>
        <li key={index}>{user}</li>)
      }
    </div>
  )
}

const mapStateToProps = (state) =>{
  console.log(state)
  if(state){
    return {
      users: state.users
    }
  }else{
    return{
      users:[]
    }
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchdata:()=> dispatch(fetchusers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);