import React from 'react'
import AddClient from './AddClient'
import { ImCross } from 'react-icons/im'
import EditClient from './EditClient'

const EditForm = ({showEditForm, handleHideForm, item}) => {
  // console.log(item)
  return (
    <div className={`${showEditForm ? 'ml-[66.5%]' : "ml-[110%]"} top-0 absolute transition-all duration-500 ease-in-out`}>
    <div className='flex items-center bg-yellow-500 px-9 space-x-56 py-5 top-0 fixed'>
      <div className=' w-[100px]'>
        <h1>Edit Client</h1>
      </div>
      <div className='ml-[17%] cursor-pointer' onClick={handleHideForm} >
        <ImCross size={15} className='' />
      </div>
    </div>
    <div className=''>
      <EditClient item={item}/>
    </div>

    <div className='flex bg-yellow-500 bottom-0 fixed py-2 px-5 space-x-5'>
      <button className='bg-red-700 py-2 px-16'>
        cancel
      </button>

      <button className='bg-blue-700 py-2 px-16'>
        save
      </button>
    </div>
  </div>
  )
}

export default EditForm