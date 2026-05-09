import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { buyBookAPI, viewBookAPI } from '../../services/allAPI'
import axiosInstance from '../../api/axiosInstance'
import {loadStripe} from '@stripe/stripe-js';
function View() {
  const [modal, setModal] = useState(false)
  const [bookDetails,setBookdetails]=useState({})
  const {id}=useParams()
  console.log(bookDetails);
  

  useEffect(()=>{
    getViewBook()
  },[])
  const getViewBook=async()=>{
    const result=await viewBookAPI(id)
    setBookdetails(result.data)
  }
  //payment
  const makePayment=async ()=>{
    console.log(import.meta.env.VITE_STRIPE_PK);
    //load stripe
const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PK);
console.log(stripe);
//api
const result=await buyBookAPI(id)
const {checkoutURL}=result.data
window.location.href=checkoutURL
  }
  return (
    <>
      <Header />
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            {/*image*/}
            <div className="col-span-1">
              <img className='w-full' src={bookDetails?.imageURL} alt="book" />
            </div>
            {/*book details*/}
            <div className="col-span-3">
              <div className="flex justify-between mt-5 md:mt-0">
                <h3 className="text-2xl font-bold">{bookDetails?.title}</h3>
                <h4 className="text-gray-400"><FaEye onClick={()=>setModal(true)}/></h4>
              </div>
              <h3 className="text-xl text-blue-700 font-bold my-5">{bookDetails?.author}</h3>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher : {bookDetails?.publisher}</p>
                <p className="font-bold">Language :{bookDetails?.language}</p>
                <p className="font-bold">No. Of Pages :{bookDetails?.pages}</p>
                <p className="font-bold">Category:{bookDetails?.category}</p>
                <p className="font-bold">ISBN :{bookDetails?.isbn}</p>
                <p className="font-bold">Orginal Price :{bookDetails?.price}</p>
                <p className="font-bold">Seller :{bookDetails?.sellerMail}</p>
              </div>
              <div className="md:my-10 my-4">
                <h4 className="font-bold text-lg">Abstract :{bookDetails?.abstract}</h4>
              </div>
              <div className="flex justify-end">
                <Link to={'/books'} className="bg-blue-900 p-2 text-white font-black flex items-center"><FaBackward className='me-2' />Back</Link>
                <button className="bg-green-900 p-2 text-white font-black flex items-center ms-5" onClick={makePayment}>Buy ${bookDetails?.discountPrice}</button>
              </div>
            </div>
          </div>
        </div>
        {/*modal*/}
        {
          modal &&
          <div className="relative z-10 overflow-y-auto" onClick={()=>setModal(false)}>
            <div className="bg-gray-500/75 inset-0 fixed">
              <div className="flex justify-center items-center min-h-screen">
                <div className="bg-white rounded-2xl md:w-250 w-100">
                  {/*modal title*/}
                  <div className="bg-black text-white p-3">
                    <h3>Book Image</h3>
                  </div>
                  {/*modal body*/}
                  <div className="relative p-5">
                    <p className="flex items-center text-blue-500">
                      <FaCamera className='me-2' />
                      camera clicks of the book in the hand of seller
                    </p>
                    <div className="md:flex flex-wrap my-4 ">
                      {
                        bookDetails?.uploadImages?.length>0 ?
                        bookDetails?.uploadImages?.map(filename=>(
                          <img className='md:w-75 w-25 md:me-2 mb-3 md:mt-0' src={`${axiosInstance.defaults.baseURL}/uploads/${filename}`} alt="img" />
                        ))
                        :
                        <div className="text-lg text-center">Pictures are unavilable!!!</div>
                      }

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }

      </div>
      <Footer />
    </>
  )
}

export default View
