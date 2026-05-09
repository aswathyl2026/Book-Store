import React, { useEffect, useState } from 'react'
import { getAllBoughtBookAPI } from '../../services/allAPI'

function PurchaseHistory() {
  const [purchaseBook, setPurchaseBook] = useState([])
  console.log(purchaseBook);

  useEffect(() => {
    getPurchaseBook()
  }, [])

  const getPurchaseBook = async () => {
    const result = await getAllBoughtBookAPI()
    setPurchaseBook(result.data)
  }
  return (
    <div className='p-10 my-5 shadow rounded'>
      {/*dupliacte*/}
      {
        purchaseBook.length > 0 ?
          purchaseBook?.map(book => (
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className="text-2xl">{book?.title}</h1>
                  <h2 className="text-xl">{book?.author}</h2>
                  <h3 className="text-lg text-blue-300">$ {book?.discountPrice}</h3>
                  <p className="text-justify">{book?.abstract}</p>
                  <div className="flex mt-3">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="pending" style={{ height: '120px', width: '120px' }} />

                  </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img src={book?.imageURL} alt="no image" className='w-full' />

                </div>
              </div>
            </div>
          ))
          :
          <div className="text-xl text-center font-bold my-15">You didnt  upload yet.</div>
      }

    </div>
  )
}

export default PurchaseHistory
