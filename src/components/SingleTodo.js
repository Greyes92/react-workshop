import React, { Component } from 'react'
import BackButton from './BackButton';

class SingleTodo extends Component {
  render() {
    return (
     <>
          <h2>{this.props.singleTodo}</h2>
      </>
    )
  }
}

export default SingleTodo;