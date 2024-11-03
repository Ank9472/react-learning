import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import AddTodo, { addTodo } from './components/AddTodo'
import Todos from './components/Todos'



function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
  <h1>Learn about redux Toolkit</h1>
  <AddTodo/>  
  <Todos/>
  </>
  )
}
export default App
