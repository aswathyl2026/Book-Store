import React, { useEffect, useState } from 'react'
import { deleteBookAPI, getAllUserBookAPI } from '../../services/allAPI';

function BookStatus() {
  const [uploadBook,setUploadBook]=useState([])
  console.log(uploadBook);
  useEffect(()=>{
    userUploadBook()
  },[])
  const userUploadBook=async()=>{
   const result=await getAllUserBookAPI()
   setUploadBook(result.data)
  }
  const removeBook=async(bookId)=>{
    await deleteBookAPI(bookId)
    userUploadBook()
  }
  return (
    <div className='p-10 my-5 shadow rounded'>
      {/*dupliacte*/}
      {
        uploadBook.length>0 ?
        uploadBook?.map(book=>(
          <div className="p-5 rounded mt-4 bg-gray-100">
        <div className="md:grid grid-cols-[3fr_1fr]">
            <div className="px-4">
                <h1 className="text-2xl">{book?.title}</h1>
                <h2 className="text-xl">{book?.author}</h2>
                <h3 className="text-lg text-blue-300">$ {book?.discountPrice}</h3>
                <p className="text-justify">{book?.abstract}t</p>
                <div className="flex mt-3">
                    {
                      book?.status=="Pending" ?
                      <img src="https://thumbs.dreamstime.com/b/red-pending-stamp-stars-circles-isolated-white-background-circular-word-diagonally-across-408787079.jpg" alt="pending" style={{height:'120px',width:'120px'}} />

                      : book?.status=="Approved" ?
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSzMjE4B6bDJp4hQVaW5sSKEmH1mHiuFXfA&s" alt="approved" style={{height:'120px', width:'120px'}} />
                      
                      :
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUc-s1TQp1Z9hUJ2QbX5LXsUYpvNgI4i9Fzw&s" alt="sold" style={{height:'120px',width:'120px'}} />
                   
                    }
                </div>
            </div>
            <div className="px-4 mt-4 md:mt-0">
                <img src={book?.imageURL} alt="no image" className='w-full'/>
                <div className="mt-4 flex justify-end">
                    <button onClick={()=>removeBook(book?._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
                </div>
            </div>
        </div>
      </div>
        ))
        :
         <p className="text-lg font-bold my-15">You didnt  upload yet.</p>
      }
      
    </div>
  )
}

export default BookStatus
