import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'
function PaymentFail() {
  return (
        <>
            <Header />
            <div className="container min-h-screen flex justify-center items center">
               <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
                <div>
                    <h1 className="text-red-500 md:text-4xl font-bold">Sorry !!! Payment is declained</h1>
                    <p className="text-2xl my-10">Appologise for the inconvinience caused and Appriciate your visit to Bookstore...</p>
                    <Link to={'/books'} className='flex items-center font-bold bg-red-700 text-white p-2 w-60'><FaBackward className='me-1'/> Explore More Books</Link>
                </div>
                <div className="flex justify-center items-center">
                    <img src="https://ceppay.iitd.ac.in/_next/image?url=%2Fpaymentfailed.gif&w=640&q=75" alt="success" style={{height:'250px'}}/>
                </div>
               </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentFail
