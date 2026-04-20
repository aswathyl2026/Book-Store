import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Books() {
  const [toggle,setToggle]=useState(false)
  return (
    <>
      <Header />
      <>
        {/*header*/}
        <div className="flex flex-col justify-center items-center my-5">
          <h1 className="text-3xl font-bold my-5">All Books</h1>
          <div className="flex my-5">
            <div className="flex my-5">
              <input type="text" className="p-2 border birder-gray-200 w-100" placeholder='Search By Book Title' />
              <button className="p-2 bg-blue-800 text-white">Search</button>
            </div>
          </div>
        </div>
        {/*grid filter and book card*/}
        <div className="md:grid grid-cols-4 p-5 md:px-40 mb-10">
          {/*filter*/}
          <div className="col-span-1">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold">Filter</h1>
              <button onClick={()=>setToggle(!toggle)} className="font-bold text-2xl md:hidden"><FaBars /></button>
            </div>
            {/*filter item*/}
            <div className={toggle?"block":"hidden md:block"}>
              <div className="mt-3">
                <input type="radio" name="filter" id="no-filter" />
                <label className='ms-3' htmlFor="no-filter">All</label>
              </div>
              {/*duplicate filter item*/}
              <div className="mt-3">
                <input type="radio" name="filter" id="filter" />
                <label className='ms-3' htmlFor="filter">category</label>
              </div>
            </div>

          </div>
          {/*book card*/}
          <div className="col-span-3">
                <div className="md:grid grid-cols-4 mt-5 w-full md:mt-0">
          {/*duplicate according to book*/}
          <div className="shadow rounded p-3 m-4 md:mb-2">
            <img style={{ width: '100%', height: '300px' }} src="https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_360,c_scale,dpr_1.5/jackets/9781408855652.jpg" alt="img" />
            <div className="flex flex-col justify-center items-center mt-4">
              <h2 className="font-bold text-blue-700 text-xl">Author</h2>
              <h3 className="text-lg">Title</h3>
              <Link to={'/books/id'} className="font-bold bg-blue-800 text-white p-2 mt-2">View Book</Link>
            </div>
          </div>
          
        </div>
          </div>
        </div>
      </>
      <Footer />

    </>
  )
}

export default Books
