import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { registerAPI } from '../services/allAPI'

function Auth({ insideRegister }) {
  const [togglePassword, setTogglePassword] = useState(false)
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, "must be atleast 3 characters").required("required"),
      email: Yup.string().email("invalid email").required("required"),
      password: Yup.string().required("required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (insideRegister) {
        handleRegister(values)
      }else{
        console.log(login);
        
      }

    }

  })
  const handleRegister = async (userData) => {
    const result = await registerAPI(userData)
    console.log(result);
    
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/land3.png)] bg-center bg-cover text-white'>
      <div className="p-10">
        <h1 className="text-center font-bold text-3xl">BOOK STORE</h1>
        <div className="bg-black p-5 flex flex-col justify-center items-center my-5" style={{ width: '400px' }}>

          <div style={{ width: '80px', height: '80px', borderRadius: '50%' }} className="border mb-5 flex justify-center items-center">
            <FaUser className='text-3xl' />
          </div>
          <h1 className="text-2xl">{insideRegister ? "Register" : "Login"}</h1>
          <form onSubmit={formik.handleSubmit} className="my-5 w-full">
            {
              insideRegister &&
              <>
                <input name='username' value={formik.values.username} onChange={formik.handleChange}
                  type="text" className="w-full bg-white text-black rounded my-5 p-2" placeholder='Username' />
                {
                  formik.errors.username && formik.touched &&
                  <div className="mb-5 text-yellow-400">{formik.errors.username}</div>
                }

              </>
            }
            <input name='email' value={formik.values.email} onChange={formik.handleChange}
              type="email" className="w-full bg-white text-black rounded mb-5 p-2" placeholder='Email' />
            {
              formik.errors.email && formik.touched &&
              <div className="mb-5 text-yellow-400">{formik.errors.email}</div>
            }
            <div className="flex  items-center">
              <input name='password' value={formik.values.password} onChange={formik.handleChange}
                type={togglePassword ? 'text' : 'Password'} className="w-full bg-white text-black rounded mb-5 p-2" placeholder='Password' />
              {
                togglePassword ?
                  <FaEyeSlash className='text-gray-500 cursor-pointer' style={{ marginTop: '-20px', marginLeft: '-30px' }} onClick={() => setTogglePassword(!togglePassword)} />
                  :
                  <FaEye className='text-gray-500 cursor-pointer' style={{ marginTop: '-20px', marginLeft: '-30px' }} onClick={() => setTogglePassword(!togglePassword)} />
              }

            </div>
            {
              formik.errors.password && formik.touched &&
              <div className="mb-5 text-yellow-400">{formik.errors.password}</div>
            }
            <div className="flex justify-between mb-5">
              <p className="text-orange-300 text-xs">Never share your Password to others</p>
              {
                !insideRegister &&
                <button className=" text-xs underline">Forgot password</button>
              }

            </div>
            <div className="text-center">
              {
                insideRegister ?
                  <button type='submit' className="w-full rounded p-2 bg-green-700">Register</button>
                  :
                  <button className="w-full rounded p-2 bg-green-700">Login</button>
              }
            </div>
            {/*googlr authentication*/}
            {
              !insideRegister &&
              <div className="my-5 text-center">
                <p>----------------------------or-----------------------------</p>
                <p className="mt-2 w-full flex justify-center items-center"> Google Authentication</p>
              </div>
            }
            <div className="my-5 text-center">
              {
                insideRegister ?
                  <p className="text-blue-500 ">Exsisting  User ?<Link to={'/login'} className='underline ms-5'>Login</Link></p>
                  :
                  <p className="text-blue-500 ">New User ? <Link to={'/register'} className='underline ms-5'>Register</Link></p>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth
