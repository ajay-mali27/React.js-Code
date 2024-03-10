import React, { Component } from 'react'

export class ArrowBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: 'Hey. Iam AJAY'
        }
        this.ConstructorBind = this.ConstructorBind.bind(this);
       
    }
    ConstructorBind() {
        this.setState({
            msg: 'Iam Harry'
        })
    }


    render() {
        return (
            <>
                <h4>3 Class Constructor Binding Method</h4>
                <h2>{this.state.msg}</h2>
                <button onClick={this.ConstructorBind}>Click Here</button>


            </>
        )
    }
}

export default ArrowBind