import React from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { FaEdit } from 'react-icons/fa'

function AdminSettings() {
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4">
          <h1 className="font-bold text-3xl text-center mb-10">Settings</h1>
          <div className="md:grid grid-cols-2 items-center">
            {/*text part*/}
            <div>
              <h2 className='text-xl mb-5'>Welcome, Admin 👋</h2>
              <p className="text-justify">
                This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.

              </p>
              <h4 className="text-lg my-5">🔧 What You Can Manage in This Section:</h4>

              <ul>
                <li>✏️ Update personal details (name, email, role, profile picture)</li>
                <li>🔐 Change or reset your password</li>
                <li>📢 Configure notification and alert preferences</li>
                <li>👥 Manage permissions based on assigned access level</li>
                <li>🧩 Customize dashboard visibility and layout</li>
              </ul>
              <p className="my-5 text-justify">
                Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚
              </p>
            </div>
            {/*edit form*/}
            <div className="flex justify-center items-center m-10 flex-col bg-blue-100 p-5 rounded">
              <label htmlFor="userprofile">
                <input type="file" name="" id="userprofile" hidden />
                <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src="https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" alt="" />
                <FaEdit style={{ marginLeft: '80px', marginTop: '-30px' }} className='text-2xl' />
              </label>
              <div className="mt-10 mb-3 px-5 w-full">
                <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Username' />
              </div>

              <div className=" mb-3 px-5 w-full">
                <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Password ' />
              </div>

              <div className=" mb-3 px-5 w-full">
                <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Reset Password' />
              </div>

              <div className=" mb-3 px-5 w-full">
                <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Bio' />
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
      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
