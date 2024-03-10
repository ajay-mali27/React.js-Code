import React, { Component } from 'react'

export class UserConditional extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Login: false
        }
    }




    render() {
        if (this.state.Login) {
            return (
                <h2>Mayur is Cleaver</h2>
            )

        } else {
            return(
                <h2>Mayuri is Dumb</h2>
            )
        }
        
    }
}

export default UserConditional