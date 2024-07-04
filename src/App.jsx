import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from "./pages/Home";
import Notfound from './pages/Notfound';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <div className='max-w-[1200px] mx-auto p-10'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='*' element={<Notfound />} />
          </Routes>
        </div>
      </AuthProvider>


    </>
  )
}

export default App
