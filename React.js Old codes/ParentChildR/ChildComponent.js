import React from 'react'

function ChildComponent(props) {
  return (
 <>
 {/* <h2>Child Component</h2> */}
 <button onClick={props.parenthandler}>Click Here</button>
 
 </>
  )
}

export default ChildComponent