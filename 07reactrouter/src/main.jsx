import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './layout.jsx'
import Home from './Component/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './Component/About/About.jsx'
// import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
      {
            path: '/',
            element:<Layout/>,
            Children: [
             {  path: "",
             Element: <Home/>
             },
             {
               path: "about",
               element: <About/>
             }
            ]
           }
           
])



ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>        
      <RouterProvider router=
      {router}/>
      </React.StrictMode>

);
