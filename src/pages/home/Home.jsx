import React, { useState } from 'react'
import { addClient, clientTable, deleteClient, editClient } from '../../api/Index'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import TableBody from '../../components/TableBody'
import AddForm from '../../components/AddForm'
import EditForm from '../../components/EditForm'


const Home = () => {

  const [hideForm, setHideForm] = useState(false)
  const [showEditForm, setShowEditForm] = useState(false)
  const [search, setSearch] = useState('')
  const [editData, setEditData] = useState(null)

  const { isLoading, data, refetch } = useQuery(['client-table'], clientTable, {
    onSuccess: response => {
    },
    onError: error => {
      console.log('error', error.response)
    }

  })

  if (isLoading) {
    return <div role="status" className='flex justify-center items-center h-full w-full'>
      <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
    </div>
  }


  const { data: clientData } = data.data.data
  // console.log(clientData)

  const handleHideForm = () => {
    setHideForm(false)
    setShowEditForm(false)
  }

  const handleShowForm = () => {
    setHideForm(true)
  }

  // const handleEditBtn = () =>{
  //   setShowEditForm(true)
  // }

  return <>

    <div className=' relative'>

      <div>
        <div className='flex px-5 items-center pt-2'>
          <h1 className='text-xl'>Clients</h1>
          <button className='bg-green-500 px-7 font-bold mt-3 md:ml-[70%] py-2 '
            onClick={handleShowForm}
            type='submit'>
            Add client
          </button>
        </div>
      </div>
      <div>
        <input type='text'
          className=' bg-zinc-600 py-1 px-5 mx-4 mb-2 rounded-md focus:outline-none'
          placeholder='Search Client'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='pr-5'>

        <table className=' border border-black py-2 text-[1.2rem] mt-2 ml-2'>
          <thead className=' bg-blue-500'>
            <tr className='border-b border-b-black text-white'>
              <th className='md:px-16'>username</th>
              <th className='md:px-16'>email</th>
              <th className='md:px-16'>status</th>
              <th className='md:px-16'>created at</th>
              <th className='md:px-16'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              clientData?.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.name.toLowerCase().includes(search)
              }).map((item) => (
                <TableBody item={item} key={item.id} setShowEditForm={setShowEditForm} setEditData={setEditData} className='text-[1rem]'/>
              ))
            }
          </tbody>
        </table>
      </div>

      <AddForm hideForm={hideForm} handleHideForm={handleHideForm} />
      <EditForm item={editData} showEditForm={showEditForm} handleHideForm={handleHideForm}/>

    </div>

  </>
}

export default Home



