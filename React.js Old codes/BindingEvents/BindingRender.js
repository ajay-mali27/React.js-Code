import React, { Component } from 'react'

export class BindingRender extends Component {
  constructor(props) {
    super(props)

    this.state = {
      msg: 'I love React.js'
    }
  }
  BindingRender(){
    this.setState({
      msg:'I Love JavaScript'
    })
  }




  render() {
    return (
      <>
        <h3>Binding First Method</h3>
        <h1>{this.state.msg}</h1>
        <button onClick={this.BindingRender.bind(this)}>Click Here</button>

      </>
    )
  }
}

export default BindingRender