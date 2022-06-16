import React, { Component } from 'react'
// import BackButton from "./BackButton"

class SingleTodo extends React.Component {
  render() {
    console.log(this.props.singleTodo.title)
    return (
     <>
        <h1 className='todoItemHeader'>Todo List Item: #{Array.prototype.indexOf(this.props.singleTodo.id)}</h1>
        <h2 className='singletodo'>{this.props.singleTodo.title}</h2>
        <h3 className='userId'>User ID: {this.props.singleTodo.userId}</h3>
        {/* <BackButton clearSingleTodo={clearSingleTodo} /> */}
     </>
    )
  }
}

export default SingleTodo;