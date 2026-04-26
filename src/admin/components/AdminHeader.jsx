import React from 'react'
import { FaPowerOff } from 'react-icons/fa'

function AdminHeader() {
  return (
    <>
    <div className="flex justify-between items-center p-3 md:px-20">
      <div className="flex items-center">
          <img width={'50px'} height={'50px'} src="/logo1.jpeg" alt="logo"  />
          <h1 className='text-2xl font-bold ms-2 '>BOOK STORE</h1>
        </div>
        <button className="flex items-center px-3 py-2 bg-black text-white border border-black rounded hover:bg-white hover:text-black">
          Logout<FaPowerOff className='ms-2'/>
        </button>
    </div>
    <div className="p-3 bg-black text-white w-full">
      <marquee> Welcome Admin, you are all set to manage and monitor the system. Let's get into work!!!</marquee>
    </div>
    </>
  )
}

export default AdminHeader
