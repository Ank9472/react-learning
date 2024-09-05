import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [Color,setcolor] = useState("black")

  return (
         <>
     <div  className="w-full h-screen duration-200  " style={{backgroundColor:"white"}}>
     <div className="flex-wrap justify-center bottom-12 inset-x-0 px-t" >
    <button className = "w-full outline-none" style={{backgroundColor:"red"}} id="1" >red</button>
    <button   className =    "w-full" style={{backgroundColor:  "blue"}} id='2 '>blue</button>
    <button className = "w-full" style={{backgroundColor:"white"}} id='3'>white</button>
    <button onClick={()=>setcolor("green")} className = "w-full" style={{backgroundColor:"green"}} >green</button>
    <button className = "outline-none" style={{backgroundColor:"black"}} >black</button>
    <button className = "w-full" style={{backgroundColor:"olive"}}>olive</button>
    <button onClick={()=>setcolor("red")}   className =  "w-full" style={{backgroundColor:"hotpink"}} >pink</button>
    </div>
    </div>
          
    </>
    )
}

export default App
 

// color change nhi ho raha hain kuch kro yaha par.