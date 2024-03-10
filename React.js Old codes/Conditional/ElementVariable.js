import React, { Component } from 'react'

export class ElementVariable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Login:false
      }
    }
  render() {
    let text=''

    if(this.state.Login) {
        text=<h2>User Conditional Component</h2>

    }else {
        text=<h2>Hello....! Variable Element</h2>
    }
    return <h2>{text}</h2>
  }
 
}

export default ElementVariable