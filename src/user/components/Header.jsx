import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom'
function Header() {
  const [toggle,setToggle]=useState(false)
  return (
    <>
      {/*header*/}
      <div className="grid grid-cols-3 p-3">
        {/*logo*/}
        <div className="flex items-center">
          <img width={'50px'} height={'50px'} src="images.jpeg" alt="logo" />
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
          <Link className='flex items-center border border-black rounded px-3 py-3 ms-3 hover:bg-black hover:text-white' to={'/login'}><FaUser />Login</Link>
        </div>
      </div>

      {/*navigation*/}
      <nav className='bg-black w-full p-3 text-white md:flex items-center justify-center'>
        {/*menu and login @small devices*/}
        <div className="md:hidden flex items-center justify-between">
          <button onClick={()=>setToggle(!toggle)}><FaBars/></button>
          <Link className='flex items-center border border-black rounded px-3 py-3 ms-3 hover:bg-black hover:text-white' to={'/login'}><FaUser />Login</Link>
        </div>
       <ul className={toggle?'flex flex-col':'md:flex hidden'}>
        <li><Link to={'/'} className='md:mx-4 mt-2 md:mt-0'>Home</Link></li>
        <li><Link to={'/books'} className='md:mx-4 mt-2 md:mt-0'>Book</Link></li>
        <li><Link to={'/contact'} className='md:mx-4 mt-2 md:mt-0'>Contact</Link></li>
       </ul>
      </nav>
    </>
  )
}

export default Header
