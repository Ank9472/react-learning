import React from "react";
import {useDispatch} from 'react-redux'
import authService from '../..appwrite/auth'
import {logout} from '../../appwrite/authSlice'

function LogoutBtn() {
      const Dispatch = useDispatch()
      const logoutHandler = () => {
            authService.logout().then(
            () =>{
                dispatchEvent(logout())
      })
      }
        return (
        <button className="inline-block px-6 duration-200 hover:bg-blue-100 rounded-full">
            Logout
        </button>
    )
}
export default LogoutBtn
