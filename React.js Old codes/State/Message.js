import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "I Love React.js"
        }
    }
    changetxt() {
        this.setState({
            msg: "I Love Python"
        })
    }
    render() {
        return (
            <>
                <h1>{this.state.msg}</h1>
                <button onClick={() => this.changetxt()}>Click Here</button>
            </>
        )
    }
}

export default Message