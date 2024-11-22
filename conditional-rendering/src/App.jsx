import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [status, setStatus] = useState(false)
  // condition ? exp1 : exp2
  //foreach  map
  function clickMe(){
    // setStatus(true)
    setStatus(!status)
  }
  return (
    <>
      <div>
        {/* {
          status == true ? <h1>Happy learning</h1> :<h1>react batch</h1> 
        } */}
      <button onClick={clickMe}>click me</button>
      {
        status == true ? 
                <div className='card'>
                    <h3>hello</h3>
                </div>
                :
                null
      }
      

        
      </div>
    </>
  )
}

export default App
