import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen h-fit py-10'>
      <div className="flex justify-center">
         <img style={{ width: '100px', height: '100px', borderRadius: '50%' }} src="https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" alt="" />
      </div>
      <h3 className="font-bold text-center text-xl my-5">
        Name
      </h3>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="mt-3">
          <Link to={'/admin'} className='flex items-center'><FaChartSimple className='me-2'/> Dashboard</Link>
        </div>

        <div className="mt-3">
          <Link to={'/admin/resource'} className='flex items-center'><FaDatabase className='me-2'/> Collections</Link>
        </div>

        <div className="mt-3">
          <Link to={'/admin/settings'} className='flex items-center'><FaGear className='me-2'/> Settings</Link>
        </div>
      </div>
    </div>
  )
}

export default AdminSidebar
