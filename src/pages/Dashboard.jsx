import React, { useContext, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import { AuthContext } from '../context/AuthContext';

const Dashboard = () => {
    const ctx = useContext(AuthContext);

        return (
            <div className='dashboard flex'>
                <div className='w-1/4 text-xl mb-4'>
                    <Sidebar />
                </div>
                <div className='w-3/4 p-4 pt-0'>
                    <h2 className=' border-b border-b-slate-300 bg-slate-200 p-2 mb-3 text-2xl'>Dashboard</h2>
                    <Main />
                </div>
                {ctx.isLogin == true ? <button className='px-3 rounded-md py-1 bg-zinc-900 text-white hover:bg-zinc-800 me-2' onClick={ () => ctx.setIsLogin(false)}>Logout</button> : <button className='px-3 rounded-md py-1 bg-zinc-900 text-white hover:bg-zinc-800' onClick={ () => ctx.setIsLogin(true)}>Login</button>}
            </div>
        )
}

export default Dashboard