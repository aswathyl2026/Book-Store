import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentSuccess() {
    return (
        <>
            <Header />
            <div className="container min-h-screen flex justify-center items center">
               <div className="md:grid grid-cols-2 px-20 justify-center items-center my-10">
                <div>
                    <h1 className="text-blue-500 md:text-4xl font-bold">Congratulations !!!!!</h1>
                    <p className="text-2xl my-10">Thank you for purchasing with Bookstore.Hope You have a good time with us...</p>
                    <Link to={'/books'} className='flex items-center font-bold bg-blue-600 text-white p-2 w-60'><FaBackward className='me-1'/> Explore More Books</Link>
                </div>
                <div className="flex justify-center items-center">
                    <img src="https://i.pinimg.com/originals/2f/b9/ca/2fb9cae9fdb0110d8a57e9cc394f35dd.gif" alt="success" />
                </div>
               </div>
            </div>
            <Footer />
        </>
    )
}

export default PaymentSuccess
