import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import AuthContext from '../context/AuthContext';
import useAuth from "../context/AuthContext";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 const  {isLogin, setIsLogin} = useAuth();

  const loginUser = () => {
    setIsLogin(true);
  }
  
return (
    <div>
      { (isLogin == true) ? "Logged in": "Not logged in" }
        <div className='w-[500px] border bg-slate-400 p-4 mx-auto rounded-md'>
            <h3 className='text-center text-3xl mb-6'>Login Form</h3>
            <form onSubmit={ e => e.preventDefault() }>
                <input type='text' className='w-full p-3 px-6 py-4 border mb-3 bg-slate-100 rounded-md' placeholder='username' autoComplete='off' />
                <input type='password' className='w-full p-3 px-6 border bg-slate-100 rounded-md py-4' placeholder='password' />
                <button onClick={loginUser} className='w-full p-3 py-4 px-6  bg-slate-800 rounded-md mt-3 border-0 text-white hover:bg-slate-600'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Home