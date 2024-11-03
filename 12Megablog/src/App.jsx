import React, {useState , useEffect} from 'react'
import {usedispatch} from 'react-redux'
import './App.css'
import AuthService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import {Footer, Header} from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading , setloading] = useState(true)
  const dispatch = usedispatch() 
  console.log(import.meta.env.VITE_APP_APPWRITE_URL)
 
 useEffect(() => {
   AuthService.getCurrentUser()
   .then((userData) =>{
      if(useData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
   } )
   .finally(() => setloading(false))
  }, [])   
  return !loading ? (
  <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
 <div className='w-full block'>
   <Header>
    <main>
   
    </main>
   </Header>
 </div>
 </div>
): null 
}
export default App
  