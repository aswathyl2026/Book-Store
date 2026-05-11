import React, { useEffect, useState } from 'react'
import { FaEdit, FaPen } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import axiosInstance from '../../api/axiosInstance'
import { ToastContainer, toast } from 'react-toastify';
import { userEditAPI } from '../../services/allAPI';
import {useNavigate} from 'react-router-dom'

function Edit() {
  const navigate=useNavigate()
  const [offCanvas, setOffCanvas] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
    cPassword: "",
    picture: "",
    role: "",
    bio: "",
    id: ""
  })
  const [existingPicture, setExistingPicture] = useState("")
  const [preview, setPreview] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [imageFileType, setImageFileType] = useState(false)
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ ...userDetails, username: user.username, role: user.role, bio: user.bio, id: user._id })
      setExistingPicture(user.picture)
    }
  }, [])
  console.log(userDetails);
  console.log(existingPicture);

  const handleUploadFile = (e) => {
    const imageFile=e.target.files[0];
    if (imageFile.type.startsWith("image/")) {
      setUserDetails({ ...userDetails, picture: e.target.files[0] })
      const url = URL.createObjectURL(e.target.files[0])
      setPreview(url)
      setImageFileType(true)
    }else{
      setImageFileType(false)
    }


  }
const handlePasswordMatch=(data)=>{
   setUserDetails({...userDetails,cPassword:data})
   userDetails.password==data?setPasswordMatch(true):setPasswordMatch(false)
}
const resetProfileForm=()=>{
  const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ picture:"", username: user.username, role: user.role, bio: user.bio, id: user._id ,password:'',cPassword:''})
      setExistingPicture(user.picture)
      setPreview(false)
      setPasswordMatch(false)
      setImageFileType(true)
}
const handleUpdate=async()=>{
  const {username,password,cPassword,bio,id,picture}=userDetails
  if(!username||!bio||!password||!cPassword){
    toast.info("please fill the form completely")
  }else if(passwordMatch){
    const reqBody=new FormData()
    for(let key in userDetails){
    if(key!="picture"){
       reqBody.append(key,userDetails[key])
    }else{
    preview?reqBody.append("picture",picture):reqBody.append("picture",existingPicture)
    }
    }
    //api
    const result=await userEditAPI(id,reqBody)
    console.log(result);
    toast.success("updated successfully..plz login agin..")
    setTimeout(() => {
      navigate('/login')
      sessionStorage.clear()
    }, 2500);
    
  }
}
  return (
    <div>
      <button onClick={() => setOffCanvas(true)} className="bg-black text-white p-2 flex items-center rounded hover:bg-white hover:text-black gap-2 cursor-pointer">EDIT<FaPen /></button>
      {/* offanvas*/}
      {
        offCanvas &&
        <div>
          <div className="fixed w-full h-full bg-gray-500/75 inset-0"></div>
          <div className="fixed top-0 left-0 bg-white h-full w-90 z-50">

            {/* head part*/}
            <div className="bg-black text-white text-2xl flex justify-between px-3 py-4">
              <h1>Update User Profile</h1>
              <FaX onClick={() => setOffCanvas(false)} />
            </div>
            {/* body part*/}
            <div className="flex justify-center items-center my-5 flex-col">
              <label htmlFor="userprofile">
                <input type="file" name="" id="userprofile" hidden onChange={(e) => handleUploadFile(e)} />
                {
                  existingPicture == "" ?
                    <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src={preview ? preview : "https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w="} alt="" />
                    :
                    existingPicture.startsWith('https://lh3.googleusercontent.com') ?
                      <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src={preview ? preview : existingPicture} alt="" />
                      :
                      <img style={{ width: '150px', height: '150px', borderRadius: '50%' }} src={preview ? preview : `${axiosInstance.defaults.baseURL}/uploads/${existingPicture}`} alt="" />
                }
                <FaEdit style={{ marginLeft: '80px', marginTop: '-30px' }} className='text-2xl' />
                {
                  !imageFileType &&
                  <div className='text-yellow-500 mt-5 text-sm'>* only accept image file</div>
                }
              </label>
              <div className="mt-10 mb-3 px-5 w-full">
                <input value={userDetails.username} onChange={e=>setUserDetails({...userDetails,username:e.target.value})} type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Username' />
              </div>

              <div className=" mb-3 px-5 w-full">
                <input value={userDetails.password}  onChange={e=>setUserDetails({...userDetails,password:e.target.value})} type="password" className="w-full border border-gray-300 rounded p-2" placeholder='Password ' />
              </div>

              <div className=" mb-3 px-5 w-full">
                <input value={userDetails.cPassword} onChange={e=>handlePasswordMatch(e.target.value)} type="password" className="w-full border border-gray-300 rounded p-2" placeholder='Reset Password' />
              </div>
              {
                  !passwordMatch &&
                  <div className='text-yellow-500 mb-3 text-sm'>* password mismatch</div>
                }

              <div className=" mb-3 px-5 w-full">
                <input value={userDetails.bio}  onChange={e=>setUserDetails({...userDetails,bio:e.target.value})} type="text" className="w-full border border-gray-300 rounded p-2" placeholder='Bio' />
              </div>
              <div className="flex justify-end mt-5 px-5 w-full">
                <button className="bg-yellow-600 text-white py-2 px-3 rounded" onClick={resetProfileForm}>
                  RESET
                </button>
                <button onClick={handleUpdate} className="bg-green-600 text-white py-2 ms-2 px-3 rounded">
                  UPDATE
                </button>
              </div>
            </div>
          </div>
        </div>
      }
      <ToastContainer position='top-center' theme='colored' autoClose='3000' />
    </div>

  )
}

export default Edit
