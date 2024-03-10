import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
  const navigate =useNavigate();
  return (
    <>
    <h1 className='Home'>Hello. This is a Home Component</h1>
    <button type="button" className="btn btn-primary Home" onClick={()=>navigate('Order-summry')} >Place-Order</button> ;
    </>
  )
}

