import React, { Component } from 'react'

export default class WelcomePage extends Component {
  render() {
    const handleSetTodos = (e) => {
      this.props.setTodos(e)
      console.log('clicked' + JSON.stringify(e.target.id))
  }
      //  console.log('should be users:' + JSON.stringify(this.props.currentState.users))
    return (
     
      <div className='welcomePage'>
          <h1 className='welcomePageHeader'>Welcome To Todo List</h1>
          <h2 className='selectUserMessage'>Please select your user profile to continue.</h2>
          {this.props.currentState.users.map((users) => (
               <h3 id={users.id} onClick={handleSetTodos}>{users.name}</h3>
          // <UserPost 
          //    key={users.id}
          //    profilePic={post.data.profilePic}
          //    message={post.data.message}
          //    timestamp={post.data.timestamp}
          //    username={post.data.username}
          //    image={post.data.image}
          // />
        
       ))}
         </div>
    )
  }
}
