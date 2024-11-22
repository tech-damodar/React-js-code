import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {

  // let productData ;
  const[productData,setProductData] = useState([])
  function getData(){
    //https://fakestoreapi.com/products
    //get
    fetch("https://fakestoreapi.com/products").then((res)=>{
    return res.json()
    }).then((data)=>{
      setProductData(data);
    })
/*
{
category : "men's clothing"
description : "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id :1
image : "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price :109.95
  }
*/
}


  return (
    <>
    <div>
      <h1>product data from api</h1>
      <button onClick={getData}>get product</button>
      {/* // productData */}
      
      <div className='product-list'>
      {
        productData.map((element)=>{
          return  <Card cData={element}/>
        })
      }
      </div>
     
    </div>
      
    </>
  )
}

export default App
