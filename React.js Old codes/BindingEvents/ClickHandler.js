import React, { Component } from 'react'

export class BindingRender extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: 'Arrow Function Binding'
        }
    }
    ClickHandler = () => ({
        this:setState({
            msg: "Hey"
        })
    })
    render() {
        return (
            <>
                <h3>4 Class Property as a Arrow Function</h3>
                <h1>{this.state.msg}</h1>
                <button onClick={this.ClickHandler}>Click Here</button>

            </>
        )
    }
}

export default BindingRender