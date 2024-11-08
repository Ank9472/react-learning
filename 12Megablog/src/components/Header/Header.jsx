import React from "react";
import {Container,Logo,LogoutBtn} from '../index'
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Header() {
     const authStatus = useSelector((state) => state.authStatus)
     const Navigate = useNavigate()
   
   
     const naItems = [
        {
            name: 'Home',
            slug: "/",
            Active: true

        } ,  
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
     ]
    return(
      <header className="py-3 shadow bg-gray-500">
         <Container>
            <nav>
                <div className="flex">
                 <div className="mr-4">
                    <link to= '/'>
                    <Logo width="70px"/>
                    </link>
                    <ul className="flex ml-auto">
                     {navItems.map((item)=> item.active ?(
                        <li key={item.name}>
                         <button onClick={() => Navigate(item.slug)}
                        className='inline-block px-6 duration-200 hover:bg-blue-100 rounded-full'>
                        {item.name}  
                         </button>
                        </li> 
                     ):null
                     )} 
                    </ul>
                 </div>  
                </div>
            </nav>
         </Container>
     </header> 
       )
}

export default Header