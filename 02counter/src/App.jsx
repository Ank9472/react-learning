import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter , setcounter ] = useState(5)
 

  // let Counter  = 5; // kyunki counter as a var work krta hain
  
   const addValue = () => {
    
  setcounter(counter +1)
 }
   



   const removeValue = () => {
   
  setcounter(counter-1)
}





  return (
    <>
    <h1>chai aur react</h1>
    <h2> counter value  {counter}</h2>
  
  <button  onClick = {addValue }>Add value {counter}</button>
 
  <br />
  <button onClick = {removeValue }>  removeValue {counter} </button>
    </>
  )
}

export default App


// yaha par ek jagah par change likhkar pure jagah  show kar skte hain

// hw positive -20 negative-0