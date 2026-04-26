import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <img className='w-100' src="https://miro.medium.com/v2/resize:fit:1400/0*GUYQoLJ08bNdTigR.gif" alt="pnf" />
      <p>Oh No!</p>
      <h3 className='text-2xl font-medium'>Look like you're lost</h3>
      <p>The page you are looking for is not Available</p>
      <Link to={'/'} className="bg-black text-white px-3 py-2 mt-5">Home</Link>
    </div>
  )
}

export default Pnf
