import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  Error  from './error.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { About } from './components/About/About.jsx'
import { Price } from './components/Price/Price.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Home } from './components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/price',
        element:<Price/>

      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
