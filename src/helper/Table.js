import React,{useState} from 'react'

const Table = () => {

  return (
    
    <div className="w-7/12 text-base">
    <div className="relative overflow-hidden shadow-md rounded-lg">
        <table className="table-auto w-full text-left">
            <thead className="text-gray-200 uppercase bg-gray-500">
                <tr>
                    <td className="py-2 border text-center font-bold p-4">Product-ID</td>
                    <td className="py-2 border text-center font-bold p-4">Description</td>
                    <td className="py-2 border text-center font-bold p-4">Price</td>
                    <td className="py-2 border text-center font-bold p-4"></td>
                    <td className="py-2 border text-center font-bold p-4"></td>
                </tr>
            </thead>
            <tbody className="bg-white text-gray-500">
                <tr className="py-1">
                    <td className="py-1 border text-center  p-4">YY-853581</td>
                    <td className="py-1 border text-center  p-4">Notebook Basic</td>
                    <td className="py-1 border text-center  p-4">$ 299</td>
                    <td className="py-1 border text-center  p-4">YY-853599</td>
                    <td className="py-1 border text-center  p-4">Notebook Pro</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Table