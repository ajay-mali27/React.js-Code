import React, { Component } from 'react'

export class TernaryOp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Login:false
      }
    }

  render() {
    return this.state.Login ? (
        <h2>Kartik is Java Developer</h2>
      
    ):(
        <h2>AJAY is Web Developer</h2>
    )
  }
}

export default TernaryOp