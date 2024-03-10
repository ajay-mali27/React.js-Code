import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Hello'
        }
        this.parentOne = this.parentOne.bind(this);
    }
    parentOne() {
        alert(`John  ${this.parentOne.bind(this)}`);
    }
    render() {
        return (
            <>

                <div>ParentComponent</div>
                {/* <h2>{this.state.parentName}</h2> */}
                <ChildComponent parenthandler={this.parentOne} />
            </>
        )
    }
}

export default ParentComponent