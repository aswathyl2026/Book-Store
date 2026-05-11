import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { getAllUsersAPI, updateBookStatusAPI, viewAllBookAPI } from '../../services/allAPI'
import axiosInstance from '../../api/axiosInstance'
import { ToastContainer, toast } from 'react-toastify';

function AdminResource() {

  const [current, setCurrent] = useState(1)
  const [allUsers, setAllUsers] = useState([])
  const [allBooks, setAllBooks] = useState([])
 

  useEffect(() => {
    if (current == 2) {
      getAllUsers()
    }
    else if(current==1){
      getAllBooks()
    }

  }, [current])
  const getAllUsers = async () => {
    const result = await getAllUsersAPI()
    if (result.status == 200) {
      setAllUsers(result.data)
    }
  }
   const getAllBooks = async () => {
    const result = await viewAllBookAPI()
    if (result.status == 200) {
      setAllBooks(result.data)
    }
  }
  const updateStatus=async(id)=>{
    const result= await updateBookStatusAPI(id)
    if(result.status==200){
   toast.success("Book approved")
   getAllBooks()
    }
  }
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="font-bold text-3xl text-center mb-10">All Resources</h1>
          <div className="flex justify-center items-center my-8 font-black tex-lg">
            <p onClick={() => setCurrent(1)} className={current == 1 ? "border-gray-200 border-l border-r border-t p-4 rounded cursor-pointer" : "border-gray-200 border-b  p-4 rounded cursor-pointer"}>Books</p>
            <p onClick={() => setCurrent(2)} className={current == 2 ? "border-gray-200 border-l border-r border-t p-4 rounded cursor-pointer" : "border-gray-200 border-b  p-4 rounded cursor-pointer"}>Users</p>

          </div>
          {/*tabs content*/}
          {
            current == 1 &&
            <div className="md:grid grid-cols-4 my-5 w-full">
              {/*duplicate according to book*/}
               {
                allBooks?.length>0 ?
                 allBooks?.map(book=>(
                   <div className="shadow rounded p-3 m-4 md:my-0">
                      <img style={{ width: '100%', height: '300px' }} src={book?.imageURL} alt=""/>
                      <div className="flex flex-col justify-center items-center mt-4">
                        <h2 className="font-bold text-blue-700 text-xl">{book?.author}</h2>
                        <h3 className="text-lg">{book?.title}</h3>
                        <p className="font-bold text-red-500">$ {book?.discountPrice}</p>
                        {
                          book?.status!="approved"  ?
                          <button onClick={()=>updateStatus(book?._id)} className="bg-green-500 p-2 mt-2 text-white w-full">APPROVE</button>
                          :
                           <img style={{ width: '50%' }} src='https://media.istockphoto.com/id/1416145560/vector/green-circle-with-green-tick-flat-ok-sticker-icon-green-check-mark-icon-tick-symbol-in-green.jpg?s=612x612&w=0&k=20&c=Uh3KS7c_o5QmrfisyV-aRzDUNqtAM7QUVJrc8bniVsQ=' alt=""/>

                        }
                        
                      </div>
                    </div>
           
                 ))
                 :
                 <div className="text-xl font-bold">Sorry No Books found</div>
               }
                   

            </div>
          }
          {
            current == 2 &&
            <div className="md:grid grid-cols-4 my-5 w-full">
              {/*duplicate according to user*/}
              {
                allUsers?.length > 0 ?

                  allUsers?.map(user => (
              <div key={user?._id} className="bg-gray-200 rounded p-2 m-2 ">
                <p className="text-red-500 font-bold text-md">ID:{user?._id}</p>
                <div className="flex mt-3 items-center">
                  <img style={{ width: '80px', height: '80px', borderRadius: '50%' }} src={user?.picture==""?"https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=":user?.picture.startsWith('https://lh3.googleusercontent.com')?user?.picture:`${axiosInstance.defaults.baseURL}/uploads/${user?.picture}`} />
                  <div className="ml-3 w-full flex flex-col">
                    <h4 className="font-bold text-md text-blue-400">{user?.username}</h4>
                    <p className="text-xs">{user?.email}</p>
                  </div>

                </div>

              </div>
                  ))
                  :
                   <div className="text-xl font-bold">Sorry No users found</div>
                }

            </div>
          }
        </div>
      </div>
      <Footer />
      <ToastContainer position='top-center' theme='colored' autoClose='3000' />
    </>
  )
}

export default AdminResource
