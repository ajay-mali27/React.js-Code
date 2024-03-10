import React, { Component } from 'react'

export class LifeCycle extends Component {
    // 1
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Victor'
      }
      console.log('LifeCycle Constructor Method')
    }
  render() {
    return (
      <h2>This is LifeCycle Method.</h2>
    )
  }
}

export default LifeCycle