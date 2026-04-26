import React from 'react'

function PurchaseHistory() {
  return (
     <div className='p-10 my-5 shadow rounded'>
      {/*dupliacte*/}
      <div className="p-5 rounded mt-4 bg-gray-100">
        <div className="md:grid grid-cols-[3fr_1fr]">
            <div className="px-4">
                <h1 className="text-2xl">Title</h1>
                <h2 className="text-xl">Author</h2>
                <h3 className="text-lg text-blue-300">$ price</h3>
                <p className="text-justify">bstract</p>
                <div className="flex mt-3">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/023/629/698/small/web-button-icon-purchase-button-free-png.png" alt="pending" style={{height:'120px',width:'120px'}} />
                   
                </div>
            </div>
            <div className="px-4 mt-4 md:mt-0">
                <img src="/author.png" alt="no image" className='w-full'/>
               
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default PurchaseHistory
