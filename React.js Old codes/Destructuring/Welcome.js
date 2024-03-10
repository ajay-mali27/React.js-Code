import React, { Component } from 'react'

export class Welcome extends Component {
  render() {
    const {name,courseName}=this.props;
    return (
      <>
      <h1>my name is {name}.Iam {courseName}.</h1>
      
      </>
    )
  }
}

export default Welcome