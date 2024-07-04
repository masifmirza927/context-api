import React, { useContext } from 'react'
import Logout from './Logout';


const Main = () => {


  return (
    <div className='p-3'>
      <h4 className='text-2xl'>Username, Profile</h4>
      <p className='p-3'>email: user@gmail.com</p>
      <p className='p-3'>isLogin: 
        <span className='font-bold text-green-400'>YES</span> <span className='font-bold text-red-400'>No</span>
      
      </p>
      <Logout />
    </div>
  )
}

export default Main