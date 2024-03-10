import React from 'react'

function EventClick() {
    function changetxt() {
        console.log("User Click On The Button");
    }
  return (
    <>
    <h3>React Event</h3>
    <button onClick={changetxt}>Click Here</button>
    
    </>
  )
}

export default EventClick