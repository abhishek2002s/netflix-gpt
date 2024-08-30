import React, { useEffect } from 'react'
import Login from './Login'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';




const Body = () => {
  const dispatch = useDispatch();


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

    useEffect(() => {
      
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user.uid;
          dispatch(addUser({uid : uid, email : email, displayName: displayName,}));
        } 
        
        else {
          // User is signed out
          dispatch(removeUser());
        }
      })

    },[]);

  return (
    <div>
       <RouterProvider router={approuter}/> 
    </div>
  )
}

export default Body