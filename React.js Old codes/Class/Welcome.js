import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    return (
      <h1>Hello Guys. My name is {this.props.name}. My Roll Number is {this.props.id}</h1>
    )
  }
}

export default Welcome