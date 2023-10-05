import { useState } from "react"
import { useMutation, useQueryClient } from "react-query"
import { deleteClient, editClient } from "../api/Index"
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
;
export default function TableBody({ item, setShowEditForm, setEditData : setItem  }) {

    const queriClient = useQueryClient()
    const [edit, setEdit] = useState(false)
    const [userEdit, setUserEdit] = useState()
    const [editData, setEditData] = useState({
        name: item.name,
        email: item.email,
        created_at: item.created_at,
        checkbox: item.checkbox
    })

    const editUserData = useMutation(['edit-client'], editClient, {
        onSuccess: response => {
            queriClient.invalidateQueries(['client-table'])

        },
        onError: error => {
            console.log('error', error.response)
        }

    })

    const deleteUserClient = useMutation(['delete-client'], deleteClient, {
        onSuccess: response => {
            queriClient.invalidateQueries(['client-table'])

        },
        onError: error => {
            console.log('error', error.response)
        }

    })

    const handleEditBtn = (id) => {
        setShowEditForm(true)
        if (edit) {
            const datas = {
                id: id,
                name: editData.name,
                email: editData.email,
                is_active: true
            }
            editUserData.mutate(datas)
            setEdit(false)
            return
        }
        setEdit(true)
        setUserEdit(id)
    }

    const handleDelete = (id) => {
        // console.log('delete client')
        deleteUserClient.mutate(id)
    }

    const handleEditChange = e => {
        const { name, value } = e.target
        setEditData({ ...editData, [name]: value })
    }

    return <>
        <tr className='border border-black text-white hover:bg-zinc-600' >
            <th className='md:px-10'>
                {item.name}
             
            </th>
            <th className='md:px-16'>{item.email}</th>
            <th>hello</th>
            <th className='md:px-16'>{item.created_at}</th>

            {/* <h1>view client profile</h1> */}
            <th className='md:px-10 flex space-x-1 m-1'>

                <button className=' bg-green-500 px-2 focus:outline-none rounded-lg group'
                    onClick={() => {
                        handleEditBtn(item.id)
                        setItem(item)
                    }
                    }
                >
                    <MdEdit size={20} className="text-white" />
                </button>
                <button className=' bg-green-500 px-2 rounded-lg focus:outline-none py-1'
                    onClick={() => handleDelete(item.id)}>
                    <MdDelete size={20} className="text-white" />
                </button>
            </th>
        </tr>


    </>
}