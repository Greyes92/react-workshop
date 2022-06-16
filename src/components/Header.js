import React, { Component } from 'react'
import UserInfo from './UserInfo'



export default class Header extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      userInfo: this.props.currentUser,
      displayInfo: false
    }
  }

  render() {

    function refreshPage() {
      window.location.reload(false);
    }

    const displayInfo = () => {
      this.setState({displayInfo: true, todos:null})
    }

    const hideInfo = () => {
      this.setState({displayInfo: false})
    }

    console.log(JSON.stringify(this.props.currentUser))
    return (
      !this.state.displayInfo ? (
     <>
     <div className='todoListHeader'>
       <button onClick={refreshPage}>Home</button>
        <h1 className='todoListTitle'>{this.props.currentUser.name}'s Todo List</h1>
        <button onClick={displayInfo}>User Info</button>
     </div>
     <div className='todoCounterContainer'>
          <h2 className='youHave'>You Have</h2>
          <h2 className='todoCounter'>{this.props.currentState.todos.length}</h2>
          <h2 className='todosLeft'>Todos Left. Sucks to be you....</h2>
               
     </div>
     </>
      ) : (
        <>
        <UserInfo currentUser={this.props.currentUser}/>
        <button className='backToTodos' onClick={hideInfo}>Back To Todos</button>
        </>
      )
    )
  }
}
