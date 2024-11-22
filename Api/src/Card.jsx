import React from 'react'

const Card = (props) => {
 
  return (
    <div className='card'>
        <img src={props.cData.image} alt="" />
        <div className='card-body'>
            <p>{props.cData.category }</p>
            <p>{props.cData.price}</p>
        </div>

    </div>
  )
}

export default Card
/*
{
category : "men's clothing"
description : "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id :1
image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price :109.95
}
*/