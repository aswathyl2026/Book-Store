import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='md:grid grid-cols-3 md:gap-10 bg-black text-white p-10'>
       <div>
        <h4 className="font-bold">ABOUT US</h4>
        <p className='text-justify mt-5'>We believe books are more than just pages they are windows into new worlds, teachers of wisdom, and companions for life. Our journey began with a passion for storytelling and a mission to make reading accessible, enjoyable, and inspiring for everyone.</p>
       </div>

       <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className="font-bold">NEWS LETTER</h4>
        <p className='my-5'>Stay updated with our latest trends</p>
        <div className="flex">
          <input type="text" placeholder='E-mail' className='bg-white text-black p-2 border'/>
          <button className='bg-yellow-500 p-2'><FaArrowRight/></button>
        </div>
       </div>

        <div className='flex flex-col md:mt-0 mt-5'>
        <h4 className="font-bold">FOLLOW US</h4>
        <p className='my-5'>Let us be social</p>
        <div className="flex">
         <FaFacebook/>
         <FaInstagram className='mx-5'/>
         <FaTwitter/>
         <FaEnvelope  className='mx-5'/>
        </div>
       </div>
       </div>
    <p className="bg-black text-center text-white p-2">Copyright © 2026 All rights reserved | This website is made with ❤️ by Aswathy L</p>
    </>
  )
}

export default Footer
