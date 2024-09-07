import { useCallback,useState,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setnumberAllowed] = useState(false);
  const[charAllowed,setcharAllowed] = useState(false)
  const [password,setpassword] = useState("")

const passwordGenerator = useCallback( ()=> {
  let pass = ""
  let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(numberAllowed) str += "!@#$%^&*_+:;><.,?/\|"
  
  for (let i = 0; i < array.length; i++) {
       let  char =Math.floor(Math.random() * str.length + 1 )
      pass += str.charAt(char)
    }
setpassword(pass)
},[length,numberAllowed,charAllowed,setpassword])

// useEffect( () =>{ passwordGenerator()
//   } , [charAllowed,numberAllowed,passwordGenerator]
// )


return(<>
       <div className='w-full max-w-wd mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
       <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
         <h1 className='text-white text-center my-3'>Password passwordGenerator</h1>
         <input type="text" 
         value={password}
         className='outline-none w-full py-1 px-3'
         placeholder='password'
         readOnly //its confirm that we cant change manually
        />
      <button className='bg-blue-700 text-white text-2xl rounded-lg' >Copy</button>
         </div>
       <div>
         <input type="range"  
         min={5}
         max={116}
        value={length} 
       className='cursor_pointer'
       onChange={(e)=>{setlength(e.target.value)}}/>
       <label>length:{length}</label>
  </div>
       <div>
         <input type="checkbox"  
         defaultChecked={numberAllowed}
         id="numberinput" 
       onChange={()=>{setnumberAllowed((prev)=>!prev);}}/>
  </div>
       <div>
         <input type="checkbox"  
         defaultChecked={charAllowed}
         id="charinput" 
       onChange={()=>{setcharAllowed((prev)=>!prev);}}/>
  </div>
    </div>
        </>)
       }

export default App
// use state ko tab karte jab koi value jaisa cheez use krte hain. jinke vajah koi change aa jaye use as a state

//() =>{} it is the way of declaration of the function inside javascript
// math.floor means it is used to  rounding of the decimal value  

// function ke andar value ya condition like cheeje declare karte hain.

// ham yaha par html ke andar hi css likhte hain yani iska mtlb kahin kahin na 
//() iska prayog run karane ke liye karte hain

// this copy paste is stop here we need to go to the next step

// ffuseEffect work nhi kar raha hai