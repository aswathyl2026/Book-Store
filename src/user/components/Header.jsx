import React, { useEffect, useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from "react-icons/fa";
import { FaGear } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'
function Header() {
  const [toggle, setToggle] = useState(false)
  const [token, setToken] = useState("")
  const [dp, setDp] = useState("")
  const [dropdown,setDropdown]=useState(false)
  const [userId,setUserId]=useState("")
  const navigate=useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token")
      const user=JSON.parse(sessionStorage.getItem("user"))
      setToken(userToken)
      setDp(user.picture)
      setUserId(user._id)
    }

  }, [])
  return (
    <>
      {/*header*/}
      <div className="grid grid-cols-3 p-3">
        {/*logo*/}
        <div className="flex items-center">
          <img width={'50px'} height={'50px'} src="/logo1.jpeg" alt="logo" />
          <h1 className='text-2xl font-bold ml-2 md:hidden'>BOOK STORE</h1>
        </div>
        {/*title*/}
        <div className="md:flex justify-center items-center hidden">
          <h1 className="text-3xl font-bold">BOOK STORE</h1>
        </div>
        {/*login*/}
        <div className='md:flex items-center justify-end hidden'>
          <FaInstagram />
          <FaFacebook className='mx-1' />
          <FaTwitter />
         {
          !token ?
           <Link className='flex items-center border border-black rounded px-3 py-3 ms-3 hover:bg-black hover:text-white' to={'/login'}><FaUser />Login</Link>
           :
           <div>
            <button onClick={()=>setDropdown(!dropdown)} className="shadow-sm rounded ms-5 p-1 hover:bg-gray-100">
             <img width='40px' height={'40px'} style={{borderRadius:'50%'}} src={dp==""?"https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=":dp.startsWith('https://lh3.googleusercontent.com')?dp:`${axiosInstance.defaults.baseURL}/uploads/${dp}`}alt="pf" />
            </button>
            {/*dropdown*/}
            {
              dropdown &&
              <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:ouline-hidden">
            <Link to={`/profile/${userId}`} className='flex items-center text-sm px-3 py-2'><FaGear className='me-2'/>Profile</Link>
            <button onClick={()=>navigate('/login')}  className='flex items-center text-sm px-3 py-2 cursor-pointer'><FaPowerOff className='me-2'/>Logout</button>
            </div>
            }
            
            
           </div>
         }
        </div>
      </div>

      {/*navigation*/}
      <nav className='bg-black w-full p-3 text-white md:flex items-center justify-center'>
        {/*menu and login @small devices*/}
        <div className="md:hidden flex items-center justify-between">
          <button onClick={() => setToggle(!toggle)}><FaBars /></button>
          {
          !token ?
           <Link className='flex items-center border border-black rounded px-3 py-3 ms-3 hover:bg-black hover:text-white' to={'/login'}><FaUser />Login</Link>
           :
           <div className='relative'>
            <button onClick={()=>setDropdown(!dropdown)} className="shadow-sm rounded ms-5 p-1 hover:bg-gray-100">
             <img width='40px' height={'40px'} style={{borderRadius:'50%'}} src={dp==""?"https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=":dp.startsWith('https://lh3.googleusercontent.com/')?dp:`${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="pf" />
            </button>
            {/*dropdown*/}
            {
              dropdown &&
              <div className="absolute right-0 top-12 z-50 mt-2 w-40 bg-white text-black shadow rounded ring-1 ring-black/5 p-2 focus:ouline-hidden">
            <Link to={`/profile/${userId}`} className='flex items-center text-sm px-3 py-2'><FaGear className='me-2'/>Profile</Link>
            <button onClick={()=>navigate('/login')} className='flex items-center text-sm px-3 py-2 cursor-pointer'><FaPowerOff className='me-2'/>Logout</button>
            </div>
            }
            
            
           </div>
         }
        </div>
        <ul className={toggle ? 'flex flex-col' : 'md:flex hidden'}>
          <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-0 font-bold text-xl'>Home</Link></li>
          <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-0 font-bold text-xl'>Book</Link></li>
          <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-0 font-bold text-xl'>Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
