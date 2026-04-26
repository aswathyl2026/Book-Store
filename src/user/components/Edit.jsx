import React, { useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

function Edit() {
    const [offCanvas,setOffCanvas]=useState(false)
  return (
    <div>
      <button onClick={()=>setOffCanvas(true)} className="bg-black text-white p-2 flex items-center rounded hover:bg-white hover:text-black gap-2 cursor-pointer">EDIT<FaPen/></button>
        {/* offanvas*/ }
        {
            offCanvas &&
            <div>
            <div className="fixed w-full h-full bg-gray-500/75 inset-0"></div>
            <div className="fixed top-0 left-0 bg-white h-full w-90 z-50">

                 {/* head part*/ }
                 <div className="bg-black text-white text-2xl flex justify-between px-3 py-4">
                    <h1>Update User Profile</h1>
                    <FaX onClick={()=>setOffCanvas(false)}/>
                 </div>
                  {/* body part*/ }
                  <div className="flex justify-center items-center my-5 flex-col">
                    <label htmlFor="userprofile">
                        <input type="file" name="" id="userprofile" hidden/>
                        <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" alt="" />
                        <FaEdit style={{marginLeft:'80px', marginTop:'-30px'}}className='text-2xl'/>
                    </label>
                   <div className="mt-10 mb-3 px-5 w-full">
                    <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Username'/>
                   </div>

                   <div className=" mb-3 px-5 w-full">
                    <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Password '/>
                   </div>

                   <div className=" mb-3 px-5 w-full">
                    <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Reset Password'/>
                   </div>

                   <div className=" mb-3 px-5 w-full">
                    <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Bio'/>
                   </div>
                   <div className="flex justify-end mt-5 px-5 w-full">
                     <button className="bg-yellow-600 text-white py-2 px-3 rounded">
                        RESET
                     </button>
                         <button className="bg-green-600 text-white py-2 ms-2 px-3 rounded">
                      UPDATE
                     </button>
                   </div>
                  </div>
            </div>
        </div>
        }
    </div>
  
  )
}

export default Edit
