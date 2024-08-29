import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/contant-url'

const Login = () => {
  const [isSingInFrom, setIsSignInForm] = useState(true);

  const  SingupForm = () => {
         setIsSignInForm(!isSingInFrom);
  }

  return (
    <div>
    <Header/>
    <div  className='absolute'>
      <img className='w-full h-full object-cover' src = {BG_URL} alt='bg-img'></img>
    </div>
   <form className=' absolute w-4/12 py-6 px-14 m-8 mt-[60px] mx-auto left-0 right-0  bg-black bg-opacity-85 rounded-sm text-white'>

   <h1 className='text-3xl font-bold py-4'>{!isSingInFrom ? "Sign Up" : "Sign In"}</h1>
    {
      (!isSingInFrom &&  <input type='text' placeholder='Enter Full Name' className='p-3 my-4 w-full  bg-black border rounded-md border-gray-600'></input> )
    }
    <input type='text' placeholder='Email or mobile number' className='p-3 my-4 w-full  bg-black border rounded-md border-gray-600'></input>
    <input type='password' placeholder='Password' className='p-3 my-4 w-full  border rounded-md bg-black  border-gray-300' ></input>
    <button className='text-xl font-bold p-2 my-3 text-center w-full rounded-md bg-red-600 '>{!isSingInFrom ? "Sign Up" : "Sign In"}</button>
    <h4 className='text-center uppercase m-3 font-normal'>Or</h4>
    <button className='text-xl font-medium p-2 my-2 text-center w-full rounded-md bg-transparent  bg-gray-400 bg-opacity-40 '>Use a sign-in code</button>
    <h4 className='text-center  m-3 font-normal text-base'>Forgot password?</h4>
    <input type='checkbox' className='my-4 mr-2'></input>
    <label className='font-base text-lg'>Remember me</label>
    {
      isSingInFrom ? 
    (<div className='my-2 text-lg text-gray-500'>New to Netflix? <span className='font-bold text-white cursor-pointer' onClick={SingupForm}>Sign up now.</span></div>)
    :(
      <div className='my-2 text-lg text-gray-500'>ALready resgistered! <span className='font-bold text-white cursor-pointer' onClick={SingupForm}>Sign In now.</span></div>
    )
    }
   </form>
    </div>
  )
}

export default Login