import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  Error  from './error.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
  },
  {
    path:"/about",
    element: <div>this is about</div>
  },
{
    path:"/contact",
    element: <div>this is contact</div>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
