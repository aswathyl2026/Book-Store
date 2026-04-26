import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'

function AdminResource() {
  const [current,setCurrent]=useState(1)
  return (
       <>
    <AdminHeader/>
     <div className="md:grid grid-cols-5 gap-2">
      <div className="col-span-1">
        <AdminSidebar/>
      </div>
      <div className="col-span-4 p-10">
         <h1 className="font-bold text-3xl text-center mb-10">All Resources</h1>
         <div className="flex justify-center items-center my-8 font-black tex-lg">
            <p onClick={()=>setCurrent(1)} className={current==1?"border-gray-200 border-l border-r border-t p-4 rounded cursor-pointer":"border-gray-200 border-b  p-4 rounded cursor-pointer"}>Books</p>
            <p onClick={()=>setCurrent(2)} className={current==2?"border-gray-200 border-l border-r border-t p-4 rounded cursor-pointer":"border-gray-200 border-b  p-4 rounded cursor-pointer"}>Users</p>
           
           </div>
            {/*tabs content*/}
            {
              current==1 &&
            <div className="md:grid grid-cols-4 my-5 w-full">
          {/*duplicate according to book*/}
          <div className="shadow rounded p-3 m-4 md:my-0">
            <img style={{ width: '100%', height: '300px' }} src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg" alt="img" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="font-bold text-blue-700 text-xl">Author</h2>
              <h3 className="text-lg">Title</h3>
              <p className="font-bold text-red-500">Price</p>
              <button className="bg-green-500 p-2 mt-2 text-white w-full">APPROVE</button>
            </div>
          </div>
          
        </div>
            }
              {
              current==2 &&
               <div className="md:grid grid-cols-4 my-5 w-full">
          {/*duplicate according to book*/}
          <div className="bg-gray-200 rounded p-2 m-2 ">
            <p className="text-red-500 font-bold text-md">ID:</p>
            <div className="flex mt-3 items-center">
               <img style={{ width: '80px', height: '80px' ,borderRadius:'50%' }} src="https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" alt='user' />
               <div className="ml-3 w-full flex flex-col">
                  <h4 className="font-bold text-md text-blue-400">Username</h4>
               <p className="text-xs">Mail</p>
               </div>
              
            </div>
            
          </div>
          
        </div>
            }
      </div>
     </div>
      <Footer/>
    </>
  )
}

export default AdminResource
