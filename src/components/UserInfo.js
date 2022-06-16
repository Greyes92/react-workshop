import React, { Component } from 'react'

export default class UserInfo extends Component {
  render() {
    return (
      <div className='userInfo'>
           <h1>Name: {this.props.currentUser.name}</h1>
           <h1>Email: {this.props.currentUser.email}</h1>
           <h1>City: {this.props.currentUser.address.city}</h1>
           <h1>Phone: {this.props.currentUser.phone}</h1>
           <h1>Website: {this.props.currentUser.website}</h1>
           <h1>Company: {this.props.currentUser.company.name}</h1>
           <h1>Company Mission: {this.props.currentUser.company.bs}</h1>
      </div>
    )
  }
}
