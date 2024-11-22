import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  //let count = 1; // normal variable
  let[count,setcount] = useState(1);   
  // state variable => data of component that we can display and update on browser
  function changeVal(){
    setcount(count+1);
    console.log(count)
  }
  function changeValdec(){
    setcount(count-1)
  }
  return (
    <>
      <div className='state'>
        <h1>state of react</h1>
        <h3>{count}</h3>
        <button onClick={changeVal}>+</button>
        <button onClick={changeValdec}>-</button>
      </div>
    </>
  )
}

export default App
