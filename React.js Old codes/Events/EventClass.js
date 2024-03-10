import React, { Component } from 'react'

export class EventClass extends Component {

    clickHandler () {
        console.log('User Click On the btn  ')
    }
  render() {
    return (
        <>
      <h3>Class Based Event</h3>
      <button onClick={this.clickHandler}>Click Here</button>
      </>
    )
  }
}

export default EventClass