import React from 'react'

const Sidebar = () => {
    return (
        <div className=' bg-slate-200'>
            <div className='text-center mb-4'>
                username
            </div>
            <ul>
                <li className="mb-2 text-white"><a href="#">Link 1</a></li>
                <li className="mb-2 text-white"><a href="#">Link 2</a></li>
                <li className="mb-2 text-white"><a href="#">Link 3</a></li>
            </ul>
        </div>
    )
}

export default Sidebar