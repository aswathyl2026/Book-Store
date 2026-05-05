import React, { useState,useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../components/Edit'
import Upload from '../components/Upload'
import BookStatus from '../components/BookStatus'
import PurchaseHistory from '../components/PurchaseHistory'
import axiosInstance from '../../api/axiosInstance'

function Profile() {
  const [current,setCurrent]=useState(1)
  const [username,setUsername]=useState("")
  const [dp,setDp]=useState("")
  const [bio,setBio]=useState("")
   useEffect(() => {
      if (sessionStorage.getItem("user")) {
        const user=JSON.parse(sessionStorage.getItem("user"))
        
        setDp(user?.picture)
        setUsername(user?.username)
        setBio(user?.bio)
      }
  
    }, [])
  return (
    <>
      <Header />
      <div style={{ height: '200px' }} className="bg-black"></div>
      <div style={{ width: "230px", height: "230px", borderRadius: "50%", marginTop: "-130px", marginLeft: "75px" }} className="bg-white p-3">
        <img style={{ width: '200px', height: '200px', borderRadius: '50%' }} src={dp==""?"https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=":dp.startsWith('https://lh3.googleusercontent.com')?dp:`${axiosInstance.defaults.baseURL}/uploads/${dp}`} alt="" />
      </div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className="font-black md:text-3xl text-2xl">{username}</h1>
          <FaCircleCheck className='text-blue-400 ms-2' />
        </div>
        <Edit/>
      </div>
      <p className="text px-20 mt-5 font-bold">{bio}</p>
      <p className="text-justify md:px-20 px-5 my-5">
        This is your personal space where you can manage your account, explore your reading activity, track your orders, and save books you love. Whether you're building a wishlist, discovering new arrivals, or reviewing your recent purchases, this page keeps everything organized and easy to access. Your reading journey continues here — enjoy exploring, discovering, and collecting stories that inspire you. ✨
      </p>
      {/*tabs*/}
      <div className="md:px-40">
           <div className="flex justify-center items-center my-8 font-black tex-lg">
            <p onClick={()=>setCurrent(1)} className={current==1?"border-gray-200 border-l border-r border-t p-4 rounded cursor-pointer":"border-gray-200 border-b  p-4 rounded cursor-pointer"}>Upload Book</p>
            <p onClick={()=>setCurrent(2)} className={current==2?"border-gray-200 border-l border-r border-t p-4 rounded cursor-pointer":"border-gray-200 border-b  p-4 rounded cursor-pointer"}>Upload Book Status</p>
            <p onClick={()=>setCurrent(3)} className={current==3?"border-gray-200 border-l border-r border-t p-4 rounded cursor-pointer":"border-gray-200 border-b  p-4 rounded cursor-pointer"}>Purchase History</p>
           </div>
            {/*tabs content*/}
            {
              current==1 &&
              <div><Upload/></div>
            }
              {
              current==2 &&
             <div><BookStatus/></div>
            }
              {
              current==3 &&
               <div>P<PurchaseHistory/></div>
            }    
      </div>
       
      <Footer />
    </>
  )
}

export default Profile
