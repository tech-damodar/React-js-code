import './App.css'
import User from './User'
function App() {
  
  return (
    <>
     <h1>this is list of mobile</h1>
      <div className='list'>
      <User name="iphone 14" price="120000" off="20" date="12-march sun" />
      <User name="samsung s23" price="90000" off="10" date="23-april, mon"/>
    

      </div>
    </>
  )
}

export default App
