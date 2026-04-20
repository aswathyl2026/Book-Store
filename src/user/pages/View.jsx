import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBackward, FaCamera, FaEye } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function View() {
  const [modal, setModal] = useState(false)
  return (
    <>
      <Header />
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            {/*image*/}
            <div className="col-span-1">
              <img className='w-full' src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg" alt="book" />
            </div>
            {/*book details*/}
            <div className="col-span-3">
              <div className="flex justify-between mt-5 md:mt-0">
                <h3 className="text-2xl font-bold">Title</h3>
                <h4 className="text-gray-400"><FaEye onClick={()=>setModal(true)}/></h4>
              </div>
              <h3 className="text-xl text-blue-700 font-bold my-5">Author Name</h3>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className="font-bold">Publisher :</p>
                <p className="font-bold">Language :</p>
                <p className="font-bold">No. Of Pages :</p>
                <p className="font-bold">Category:</p>
                <p className="font-bold">ISBN :</p>
                <p className="font-bold">Orginal Price :</p>
                <p className="font-bold">Seller :</p>
              </div>
              <div className="md:my-10 my-4">
                <h4 className="font-bold text-lg">Abstract :</h4>
              </div>
              <div className="flex justify-end">
                <Link to={'/books'} className="bg-blue-900 p-2 text-white font-black flex items-center"><FaBackward className='me-2' />Back</Link>
                <button className="bg-green-900 p-2 text-white font-black flex items-center ms-5">Buy $56</button>
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
                      <img className='md:w-75 w-25 md:me-2 mb-3 md:mt-0' src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg" alt="img" />

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
