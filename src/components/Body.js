import React from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'




const Body = () => {
    const approuter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path : "/browse",
            element : <Browse/>,
        },
    ]);

  return (
    <div>
       <RouterProvider router={approuter}/> 
    </div>
  )
}

export default Body