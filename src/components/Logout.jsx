import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'


const Logout = () => {
  const ctx = useContext(AuthContext);

    return (
      <div>
        {ctx.isLogin == true ? <button className='px-3 rounded-md py-1 bg-zinc-900 text-white hover:bg-zinc-800 me-2' onClick={ () => ctx.setIsLogin(false)}>Logout</button> : <button className='px-3 rounded-md py-1 bg-zinc-900 text-white hover:bg-zinc-800' onClick={ () => ctx.setIsLogin(true)}>Login</button>

}
      </div>
    )
}

export default Logout   