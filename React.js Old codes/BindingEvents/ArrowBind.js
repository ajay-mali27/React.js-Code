import React, { Component } from 'react'

export class ArrowBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         msg:'Ajay is web Develoeper'
      }
    }
    ArrowBind() {
        this.setState({
            msg:'Ajay Will Go to Venice'
        })
    }
  render() {
    return (
     <>
     <h4>2 React Arrow Binding Method </h4>
     <h2>{this.state.msg}</h2>
     <button onClick={()=>this.ArrowBind()}>click here</button>
     
     </>
    )
  }
}

export default ArrowBind