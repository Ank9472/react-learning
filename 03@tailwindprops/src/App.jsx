import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
const [count,setCount] = useState(0)
let myObj = {
    username: "Ankit",
    age:21 
}
let newArr = [1,2,3]
  return (
  <>
    <h1 className='bg-yellow-800 text-slate-950 p-3 rounded-2xl' >Tailwind chai  </h1>
<Card/>
<Card/>

</>
  )
}

export default App
