import React, { Component } from 'react'

export class ShortCC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Login:true
      }
    }
  render() {
   return this.state.Login &&
   <h2>Hey...I am Ajay
    
   </h2>
  }
}

export default ShortCC