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
import { Friends } from './components/Friends/Friends.jsx'
import { FriendDetail } from './components/FriendDetail/FriendDetail.jsx'
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
        path:'friends',
        element:<Friends/>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friends/:friendId',
        element:<FriendDetail/>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
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
      },
      {
       path:'*',
       element: <Error/>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
