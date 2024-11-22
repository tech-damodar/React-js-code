import React from 'react'

const User = (props) => {
    console.log(props)
  return (
     
    <div className='mobile'>
        <h2>{props.name}</h2>
        <p>price : {props.price}</p>
        <p>{props.off}% off</p>
        <p>FREE delivery {props.date}</p>
    </div>
    
  )
}

export default User