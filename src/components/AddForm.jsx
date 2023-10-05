import React from 'react'
import AddClient from './AddClient'
import { ImCross } from 'react-icons/im'

const AddForm = ({hideForm, handleHideForm}) => {

  return (
    <div className={`${hideForm ? 'ml-[66.5%]' : "ml-[110%]"} top-0 absolute transition-all duration-500 ease-in-out`}>
    <div className='flex items-center bg-yellow-500 px-8 space-x-56 py-5 top-0 fixed'>
      <div className=' w-[100px]'>
        <h1>Add Client</h1>
      </div>
      <div className=' cursor-pointer' onClick={handleHideForm} >
        <ImCross size={15} className='' />
      </div>
    </div>
    <div className=''>
      <AddClient submitData={submitData}/>
    </div>

    <div className='bg-yellow-500 bottom-0 flex fixed py-2 px-5 space-x-5'>
      <button className='bg-red-700 py-2 px-16'>
        cancel
      </button>

      <button className='bg-blue-700 py-2 px-16' onClick={submitData}>
        save
      </button>
    </div>
  </div>
  )
}

export default AddForm