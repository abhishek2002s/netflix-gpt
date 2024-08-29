import React from 'react'
import { LOGO_URL } from '../utils/contant-url'

const Header = () => {
  return (
    <div className='absolute w-48 z-20 px-8 py-2 bg-gradient-to-b from-black'>
    <img src={LOGO_URL} alt='logo' className='h-17 w-full'></img>
    </div>
  )
}

export default Header