import React, { Component } from 'react'

class BackButton extends React.Component {
  render() {

     const handleClearSingleTodo = () => {
          this.props.clearSingleTodo()
      }

    return (
      <button onClick={handleClearSingleTodo}>Back</button>
      // <button onClick={this.props.clearSingleTodo}>Back</button>
    )
  }
}

export default BackButton;
