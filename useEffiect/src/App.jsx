import { useEffect, useState } from 'react'
import './App.css'

function App() {
// useEffect
  useEffect(()=>{
    console.log("useEffect working !!")
  },[])  
  let[name,setName] = useState("");
  let getName =(event)=>{
    console.log(event.target.value)
    setName(event.target.value);
  }
  return (
    <>
    {/* <h1>{count}</h1>
    <button onClick={logic}>click me</button> */}
      <h1>Hello app component</h1>
      <label>Name </label><input type="text" onChange={getName} />
      
      <h1>{name}</h1>
    </>
  )
}

export default App
